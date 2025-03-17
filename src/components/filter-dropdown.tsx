"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterDropdownProps {
    label: string
    options: string[]
    value: string | null
    onChange: (value: string | null) => void
}

export default function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
    return (
        <div>
            <Select value={value || ""} onValueChange={(val) => onChange(val || null)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={`${label}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All {label}s</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

