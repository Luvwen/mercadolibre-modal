import { Button, Divider, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { BagCard } from './BagCard';
import { Navbar } from './Navbar/Navbar';

import { ProductCard } from './ProductCard';

export const Productos = () => {
    return (
        <>
            <Navbar />;
            <Stack p="0 50px" spacing="3" width="100vw">
                <HStack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                >
                    <Stack alignItems="center" direction="row">
                        <Text fontSize="24px" fontWeight="bold" pb="3px">
                            Tote mono
                        </Text>
                        <Divider
                            border="2px solid gray"
                            height="15px"
                            orientation="vertical"
                        />
                        <Text>BX-0-001-001-03-01</Text>
                    </Stack>
                    <Link color="blue">Ingresar código manualmente</Link>
                </HStack>
                <Stack alignItems="center" direction="row">
                    <Text>Orden #26376237</Text>
                    <Text>Carrier: Aquino</Text>
                </Stack>
            </Stack>
            <ProductCard />
            <Stack
                direction="row"
                justifyContent="flex-end"
                pr="50px"
                spacing="5"
            >
                <Button
                    _hover={{ background: 'red.500', color: 'secondary' }}
                    bg="white"
                    color="blue"
                >
                    Cerrar tote
                </Button>
                <Button colorScheme="blue">Finalizar orden</Button>
            </Stack>
            <BagCard />
        </>
    );
};
