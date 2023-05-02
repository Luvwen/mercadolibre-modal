import { SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

export const BagCard = () => {
    return (
        <Stack
            alignItems="center"
            bg="primary"
            borderRadius="10px"
            boxShadow="0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
            direction="row"
            height="25vh"
            m="25px auto 0"
            pl="50px"
            position="relative"
            spacing="10"
            width="30vw"
        >
            <Image
                boxSize="150"
                src="https://www.romipack.com.ar/img/productos-luna-med.png"
            />
            <Stack>
                <Text>Empaque sugerido: </Text>
                <Heading fontSize="2.5em">Bolsa</Heading>
            </Stack>
            <Box position="absolute" right="5" top="5">
                <SmallCloseIcon color="white" fontSize="24px" />
            </Box>
        </Stack>
    );
};
