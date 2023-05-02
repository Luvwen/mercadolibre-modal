import { Box, Checkbox, Image, Stack, Text } from '@chakra-ui/react';

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
                bg="#DFD8D7"
                borderRadius="6px 6px 0 0"
                display="flex"
                height="9vh"
            >
                <Text as="h4" fontSize="1em" pl="30px">
                    Descripción del producto
                </Text>
            </Box>
            <Stack direction="row" justifyContent="space-between" p="20px">
                <Stack direction="row" spacing="5">
                    <Image
                        boxSize="50"
                        src="https://www.multipoint.com.ar/Image/0/700_700-SM-A235MZKEARO-6.png"
                    />
                    <Stack spacing="0">
                        <Text>Celular Samsung Galaxy A23 128/4GB Black</Text>
                        <Text>
                            Código ML:
                            <Text as="span" fontWeight="bold" pl="5px">
                                76869420104
                            </Text>
                        </Text>
                    </Stack>
                </Stack>
                <Stack alignItems="center" direction="row">
                    <Checkbox />
                    <Text>Tiene un problema</Text>
                </Stack>
            </Stack>
        </Stack>
    );
};
