import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"
const App: React.FC<{}> = ({ children }) => {
    
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default App