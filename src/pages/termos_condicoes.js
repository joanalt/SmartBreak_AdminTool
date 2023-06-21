import Head from "next/head";
import NextLink from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Termos = () => {
  return (
    <>
      <Head>
        <title>Smart Break</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          backgroundColor: "#07407B",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Termos e condições gerais de uso do aplicativo Smart Break.
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              A plataforma visa licenciar o uso do aplicativo e demais ativos de propriedade
              intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos
              utilizadores. O presente Termo estabelece obrigações contratadas de livre e espontânea
              vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou
              jurídicas, utilizadores do aplicativo Smart Break. Ao utilizar a plataforma o
              utilizador aceita integralmente as presentes normas e compromete-se a observá-las, sob
              o risco de aplicação de penalidades.
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Registo:
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              Após a confirmação do registo, o utilizador possuirá um login e uma senha pessoal, a
              qual assegura ao utilizador o acesso individual à mesma. Desta forma, compete ao
              utilizador exclusivamente a manutenção de referida senha de maneira confidencial e
              segura, evitando o acesso indevido às informações pessoais. O utilizador poderá, a
              qualquer tempo, requerer o cancelamento de seu registo junto ao aplicativo Smart
              Break. O utilizador, ao aceitar os Termos e Política de Privacidade, autoriza
              expressamente a aplicação a coletar, usar, armazenar, tratar, ceder ou utilizar as
              informações derivadas do uso dos serviços, do site e quaisquer plataformas, incluindo
              todas as informações preenchidas pelo utilizador no momento em que realizar ou
              atualizar o seu registo, além de outras expressamente descritas na Política de
              Privacidade que deverá ser autorizada pelo usuário.
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Suporte:
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              Em caso de qualquer dúvida, sugestão ou problema com a utilização da aplicação, o
              utilizador poderá entrar em contato com o suporte, através do email
              suporte@smarkbreak.pt.
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Responsabilidade:
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              É de responsabilidade do utilizador: a. defeitos ou vícios técnicos originados no
              próprio sistema do utilizador; b. pela proteção aos dados de acesso à sua conta/perfil
              (login e senha). É de responsabilidade da aplicação Smart Break: a. indicar as
              características do serviço ou produto; b. os conteúdos ou atividades ilícitas
              praticadas através da sua plataforma. A plataforma não se responsabiliza por links
              externos contidos em seu sistema que possam redirecionar o utilizador a ambiente
              externo a sua rede. Não poderão ser incluídos links externos ou páginas que sirvam
              para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas,
              polêmicas, pornográficas, xenofóbicas, discriminatórias ou ofensivas.
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Alterações:
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente
              e a qualquer tempo, por parte da empresa responsável pelo Smart Break, para adequar ou
              modificar os serviços, bem como para atender novas exigências legais. As alterações
              serão veiculadas pelo aplicativo SmartBreak e o utilizador poderá optar por aceitar ao
              não o novo conteúdo.
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography color="white" variant="h5">
              Política de privacidade:
            </Typography>
            <Typography color="white" gutterBottom variant="body2">
              Além do presente Termo, o utilizador deverá consentir com as disposições contidas na
              respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da
              interface do aplicativo.
            </Typography>
          </Box>
          <NextLink href="/registar" passHref>
            <Button
              color="primary"
              variant="contained"
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
              style={{ display: "flex", justifyContent: "center" }}
            >
              Voltar
            </Button>
          </NextLink>
        </Container>
      </Box>
    </>
  );
};

export default Termos;
