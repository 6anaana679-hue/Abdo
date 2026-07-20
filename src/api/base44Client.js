// Base44 Client Configuration
// This file initializes the Base44 API client

class Base44Client {
  constructor() {
    this.apiUrl = import.meta.env.VITE_BASE44_API_URL || 'https://api.base44.com'
    this.workspaceId = import.meta.env.VITE_BASE44_WORKSPACE_ID
    this.apiKey = import.meta.env.VITE_BASE44_API_KEY
    this.entities = {}
    this.initializeEntities()
  }

  initializeEntities() {
    const entityNames = [
      'Student',
      'Attendance',
      'Exam',
      'Grade',
      'Payment',
      'Expense',
      'Settings'
    ]

    entityNames.forEach(name => {
      this.entities[name] = new EntityClient(this, name)
    })
  }
}

class EntityClient {
  constructor(client, entityName) {
    this.client = client
    this.entityName = entityName
    this.endpoint = `${client.apiUrl}/workspace/${client.workspaceId}/${entityName}`
  }

  async list(orderBy = '-created_date', limit = 100) {
    try {
      const response = await fetch(
        `${this.endpoint}?orderBy=${orderBy}&limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${this.client.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )
      if (!response.ok) throw new Error(`Failed to list ${this.entityName}`)
      return await response.json()
    } catch (error) {
      console.error(`Error listing ${this.entityName}:`, error)
      return []
    }
  }

  async filter(query = {}) {
    try {
      const params = new URLSearchParams()
      Object.entries(query).forEach(([key, value]) => {
        params.append(key, value)
      })
      
      const response = await fetch(
        `${this.endpoint}?${params.toString()}`,
        {
          headers: {
            'Authorization': `Bearer ${this.client.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )
      if (!response.ok) throw new Error(`Failed to filter ${this.entityName}`)
      return await response.json()
    } catch (error) {
      console.error(`Error filtering ${this.entityName}:`, error)
      return []
    }
  }

  async create(data) {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.client.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error(`Failed to create ${this.entityName}`)
      return await response.json()
    } catch (error) {
      console.error(`Error creating ${this.entityName}:`, error)
      throw error
    }
  }

  async update(id, data) {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.client.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error(`Failed to update ${this.entityName}`)
      return await response.json()
    } catch (error) {
      console.error(`Error updating ${this.entityName}:`, error)
      throw error
    }
  }

  async delete(id) {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.client.apiKey}`,
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) throw new Error(`Failed to delete ${this.entityName}`)
      return true
    } catch (error) {
      console.error(`Error deleting ${this.entityName}:`, error)
      throw error
    }
  }

  async deleteMany(query = {}) {
    try {
      const items = await this.filter(query)
      await Promise.all(items.map(item => this.delete(item.id)))
      return true
    } catch (error) {
      console.error(`Error deleting multiple ${this.entityName}:`, error)
      throw error
    }
  }
}

export const base44 = new Base44Client()
