import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const DEFAULT_REGION = "LAS"

type RegionSelectProps = {
  onChange: (value: string) => void
  value: string
}

const RegionSelect = ({ onChange, value }: RegionSelectProps) => {
  console.log(value)
  return (
    <div className="flex justify-center">
      <Select value={value} onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="w-24 select-none bg-white">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent className="max-w-10">
          <SelectItem value="LAS">LAS</SelectItem>
          <SelectItem value="NA">NA</SelectItem>
          <SelectItem value="EU">EU</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export const Home = () => {
  const [form, setForm] = useState({
    summoner1: {
      name: "",
      region: DEFAULT_REGION
    }, summoner2: {
      name: "",
      region: DEFAULT_REGION
    }
  })
  const handleVersus = () => {
    console.log("Versus!")
  }

  return (
    <div className="flex flex-col h-[90vh] justify-center  content-center gap-2">
      <div className="flex flex-col  bg-palette-300 gap-4 mx-auto px-24 py-14 rounded-lg shadow-lg">
        <div className="flex gap-10 justify-center ">
          <img src="/darius-garen.png" alt="logo" className="w-72 h-72 select-none" />
          <div className="flex flex-col gap-5 justify-center w-full items-center">
            {/* <p className="text-4xl font-bold text-black text-center">LOL RIVALS</p> */}
            <img src='/logo.png' alt="logo" className="h-20 select-none" />
            <div className="w-full h-[2px] bg-slate-700" />
            <div className="text-gray-700 text-center mb-6 leading-relaxed">
              <p><strong className="text-gray-900">Compare</strong> yourself with a friend</p>
              <p>See each player <strong className="text-gray-900">stats</strong></p>
              <p>Get some <strong className="text-gray-900">tips</strong> to beat your rival</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          <Input className="w-72 h-20 text-right text-2xl bg-white border-gray-300 px-6 select-none " placeholder={`Summoner#${form.summoner1.region}`} />
          <Button className="h-20 w-20 text-2xl select-none shadow-lg bg-palette-500 hover:bg-palette-700" onClick={handleVersus}>¡VS!</Button>
          <Input className="w-72 h-20 text-2xl bg-white border-gray-300 px-6 select-none " placeholder={`Summoner#${form.summoner2.region}`} />
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          <RegionSelect
            value={form.summoner1.region}
            onChange={(value: string) => setForm(prev => ({ ...prev, summoner1: { name: prev.summoner1.name, region: value } }))}
          />
          <div className="w-20" />
          <RegionSelect
            value={form.summoner2.region}
            onChange={(value: string) => setForm(prev => ({ ...prev, summoner2: { name: prev.summoner2.name, region: value } }))}
          />
        </div>
      </div>
    </div>
  )
}