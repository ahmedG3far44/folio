import { useTheme } from "@/contexts/ThemeProvider"
import { ReactNode } from "react";


export default function SuccessMessageToast({ visible, message, title, icon }: { visible: boolean, title: string; message: string, icon: ReactNode }) {
    const { activeTheme } = useTheme()
    const { cardColor, secondaryText, borderColor, primaryText } = activeTheme
    return <div className={`transition-all duration-300 ease-out shadow-lg`}>
        <div
            style={{
                backgroundColor: cardColor,
                borderColor,
            }}
            className={`
        max-w-sm w-full border shadow-lg rounded-lg 
        pointer-events-auto border backdrop-blur-sm transform transition-all duration-300 ease-out
        ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95'}
        hover:shadow-xl hover:scale-[1.02]
      `}
        >

            <div className="p-4">
                <div className="flex items-center gap-2">
                    <div style={{ color: primaryText }} className="flex-shrink-0">
                        {icon}
                    </div>

                    <div className="ml-3 flex-1">
                        <h4 style={{ color: primaryText }} className={`text-sm font-bold `}>
                            {title}
                        </h4>
                        <p style={{ color: secondaryText }} className={`mt-1 text-sm leading-relaxed`}>
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}