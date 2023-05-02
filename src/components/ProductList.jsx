import { Heading, Image, Stack, Text } from '@chakra-ui/react';

import { products } from '../data';

export const ProductList = () => {
    return (
        <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-evenly"
            width="100vw"
        >
            {products.map((product) => {
                return (
                    <Stack
                        _hover={{
                            borderRadius: '12px',
                            boxShadow:
                                '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                        }}
                        alignItems="center"
                        cursor="pointer"
                        direction="column"
                        key={product.code}
                        maxW="350px"
                        textAlign="center"
                    >
                        <Heading fontSize="1.5em">{product.name}</Heading>
                        <Image boxSize="200" src={product.image} />
                        <Text fontSize="1.2em" fontWeight="bold">
                            {product.code}
                        </Text>
                    </Stack>
                );
            })}
        </Stack>
    );
};
