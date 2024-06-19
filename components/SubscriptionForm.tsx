"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import axios from "axios"

interface FormData {
  name: string
  email: string
}

const SubscriptionForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" })
  const [message, setMessage] = useState<string>("")
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  useEffect(() => {
    const savedData = localStorage.getItem("subscriptionData")
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = (): boolean => {
    const { name, email } = formData
    return name !== "" && email !== ""
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        )
        setMessage(
          `Subscription successful! Data received: ${JSON.stringify(
            response.data
          )}`
        )
        localStorage.setItem("subscriptionData", JSON.stringify(formData))
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(
            `Error: ${error.response?.status} - ${error.response?.statusText}`
          )
        } else {
          setMessage("An unexpected error occurred")
        }
      }
      setModalVisible(true)
    } else {
      setMessage("Please fill all fields.")
    }
  }

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl text-slate-900 font-semibold mt-4">
        Subscribite a nuestras noticias
      </h2>
      <p className="text-slate-700 text-lg mb-8 mt-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic
        voluptate, fugit non ratione ipsum voluptatibus quas mollitia
        perspiciatis consectetur temporibus optio assumenda quia provident!
        Vitae deleniti placeat aspernatur neque.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-between md:items-center px-1 flex-col md:flex-row"
      >
        <div className="flex gap-3 flex-col md:flex-row">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white h-10 font-medium px-4 mt-4 md:mt-0 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
        >
          Subscribirse
        </button>
      </form>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h4 className="text-slate-900 font-bold text-xl mb-2">
              ¡Bienvenido!
            </h4>
            <p className="text-slate-700">
              Gracias por suscribirte a nuestro diario digital. Estamos
              emocionados de tenerte con nosotros y esperamos que disfrutes de
              nuestras noticias y actualizaciones.
            </p>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      {message === "Please fill all fields." && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-red-700">{message}</p>
            <button
              onClick={() => setMessage("")}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubscriptionForm
