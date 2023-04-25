import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

//const URL = "http://localhost:8080/"
const URL = "https://air-quality.azurewebsites.net/"
export const History = () => {
  const navigate = useNavigate()
  const navigateDashboard = () => {
    navigate("/dashboard")
  }

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${URL}history`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.list)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const co2Data = data.map((item) => {
    const date = new Date(item.time)
    const formattedTime = `${date.toLocaleTimeString()}`
    return { Time: formattedTime, CO2: item.CO2 }
  })

  const humidityData = data.map((item) => {
    const date = new Date(item.time)
    const formattedTime = `${date.toLocaleTimeString()}`
    return { Time: formattedTime, Humidity: item.humidity }
  })

  const temperatureData = data.map((item) => {
    const date = new Date(item.time)
    const formattedTime = `${date.toLocaleTimeString()}`
    return { Time: formattedTime, Temperature: item.temperature }
  })

  return (
    <div className="bg-[#F8F8FF] h-screen flex items-center">
      <div className="flex flex-col justify-between mx-auto h-[85%] w-[90%]">
        <div className="text-3vw text-light-purple font-bold mx-auto">
          HALTIAN DEMO
        </div>
        <div className="bg-white justify-around rounded-xl w-[80%] h-[85%] flex-col flex mx-auto items-center">
          <div className="mx-auto h-[90%] w-[95%] justify-between flex flex-col">
            <div className="flex justify-between w-full">
              <div className="text-1.5vw font-semibold">History Data</div>
              <button
                className="w-[10%] bg-light-purple text-white rounded-full text-1vw px-[2%] py-[%]"
                onClick={navigateDashboard}
              >
                Back
              </button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 h-[90%]">
              <ResponsiveContainer width="200%">
                <LineChart data={temperatureData}>
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Temperature"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>

              <div></div>

              <ResponsiveContainer>
                <LineChart data={humidityData}>
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>

              <ResponsiveContainer>
                <LineChart data={co2Data}>
                  <XAxis dataKey="Time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="CO2" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
