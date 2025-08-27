import {
  Box,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="header"
      bg="black"
      p={4}
      color="white"
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex alignItems="center" maxW="1200px" mx="auto" gap={4}>
        {/* Logo */}
        <Box>
          <Heading size="md" fontWeight="normal" letterSpacing="tight">
            Meu App
          </Heading>
        </Box>

        <Spacer />

        {/* Navegação */}
        {!isMobile && (
          <ButtonGroup gap={4}>
            <Button
              variant="ghost"
              color={"white"}
              _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
            >
              Início
            </Button>
            <Button
              variant="ghost"
              color={"white"}
              _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              color={"white"}
              _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
            >
              Contato
            </Button>
          </ButtonGroup>
        )}

        <Spacer />

        {/* Ações */}
        <ButtonGroup gap={3}>
          <Button
            variant="outline"
            color={"whitesmoke"}
            borderColor="white"
            _hover={{ bg: 'white', color: 'black' }}
          >
            Entrar
          </Button>
          <Button
            colorScheme="whiteAlpha"
            bg="white"
            color="black"
            _hover={{ bg: 'gray.200' }}
          >
            Cadastre-se
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export { Header };
