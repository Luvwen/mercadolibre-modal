import { Box, Stack, Text } from '@chakra-ui/react';
import { Product } from './Product';

export const ProductCard = () => {
    return (
        <Stack
            borderRadius="6px"
            boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
            m="15px auto"
            minH="20vh"
            width="93%"
        >
            <Box
                alignItems="center"
                bg="#F2EAE9"
                borderRadius="6px 6px 0 0"
                display="flex"
                height="9vh"
            >
                <Text as="h4" fontSize="1em" pl="30px">
                    Descripción del producto
                </Text>
            </Box>
            <Product />
        </Stack>
    );
};
