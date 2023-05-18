import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/itineraries`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(itineraryFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(itineraryFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryFormData._id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itineraryFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(itineraryId) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteItinerary(itineraryId) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createFlight(itineraryId, flightFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/flights`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flightFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createAccommodation(itineraryId, accommodationFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/accommodations`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accommodationFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateFlight(itineraryId, flightId, flightFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/flights/${flightId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flightFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateAccommodations(itineraryId, accommodationId, accommodationFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/accommodations/${accommodationId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accommodationFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteAccommodations(itineraryId, accommodationId) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/accommodations/${accommodationId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteFlight(itineraryId, flightId) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/flights/${flightId}`, {
      method: 'Delete',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createActivity(itineraryId, activityFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/activities`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateActivity(itineraryId, activityId, activityFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/activities/${activityId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activityFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteActivity(itineraryId, activityId) {
  try {
    const res = await fetch(`${BASE_URL}/${itineraryId}/activities/${activityId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
  update,
  show,
  deleteItinerary,
  createFlight,
  createAccommodation,
  updateFlight,
  updateAccommodations,
  deleteAccommodations,
  deleteFlight,
  createActivity,
  updateActivity,
  deleteActivity,
}
