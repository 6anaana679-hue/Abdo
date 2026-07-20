import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { base44 } from '@/api/base44Client'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true)
  const [authError, setAuthError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoadingAuth(true)
        // Check if user is authenticated
        const isAuthenticated = localStorage.getItem('auth_token')
        if (!isAuthenticated) {
          setAuthError({ type: 'auth_required' })
        }
      } catch (error) {
        setAuthError({ type: 'auth_required' })
      } finally {
        setIsLoadingAuth(false)
      }
    }

    const loadPublicSettings = async () => {
      try {
        setIsLoadingPublicSettings(true)
        // Load public settings
        await base44.entities.Settings.list()
      } catch (error) {
        console.error('Failed to load settings:', error)
      } finally {
        setIsLoadingPublicSettings(false)
      }
    }

    checkAuth()
    loadPublicSettings()
  }, [])

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        navigateToLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
