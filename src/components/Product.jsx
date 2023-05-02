import { Checkbox, Image, Stack, Text } from '@chakra-ui/react';

export const Product = () => {
    return (
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
                            6869420104
                        </Text>
                    </Text>
                </Stack>
            </Stack>
            <Stack alignItems="center" direction="row">
                <Checkbox />
                <Text>Tiene un problema</Text>
            </Stack>
        </Stack>
    );
};
