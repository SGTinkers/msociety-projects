"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterDropdownProps {
    label: string
    options: string[]
    value: string | null
    onChange: (value: string | null) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
    return (
        <div>
            <Select value={value || "all"} onValueChange={(val) => onChange(val === "all" ? null : val)}>
                <SelectTrigger className="w-[160px]">
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

export default FilterDropdown

