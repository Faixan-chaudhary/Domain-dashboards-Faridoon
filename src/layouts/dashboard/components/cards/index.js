import React from "react";
import { Box, Card, Grid, Typography, Tooltip } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { IoMdWarning } from "react-icons/io";
import { MdError, MdVerified } from "react-icons/md";

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

const moveAnimation = keyframes`
  0% { transform: translateX(10); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0px); }
`;

const StyledCard = styled(Card)(({ theme, bgGradient, cardType }) => ({
  padding: "20px",
  borderRadius: "12px",
  background: bgGradient,
  height: "140px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  animation: cardType === "Near to Expire" 
    ? `${blinkAnimation} 1s infinite`
    : cardType === "Expired" 
    ? `${moveAnimation} 3s infinite`
    : "none"
}));

const IconWrapper = styled(Box)({
  fontSize: "2rem",
//   marginBottom: "4px"
});

const CountTypography = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
//   marginBottom: "4px"
});

const StatusDashboard = () => {
  const cards = [
    {
        title: "Safe Zone",
        count: 5,
        icon: <MdVerified />,
        gradient: "linear-gradient(135deg, #32CD32 0%, #3CB371 100%)",
        description: "Items within safe period"
      },
      {
        title: "Expired",
        count: 4,
        icon: <MdError />,
        gradient: "linear-gradient(135deg, #FF4433 0%, #FF6347 100%)",
        description: "Items past their expiration date"
      },
    {
      title: "Near to Expire",
      count: 2,
      icon: <IoMdWarning />,
      gradient: "linear-gradient(135deg,rgb(246, 151, 35) 0%, #FFA500 100%)",
      description: "Items approaching expiration date"
    },
 
 
  ];

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: "16px", md: "24px" }
      }}
    >
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            key={index}
            sx={{
              animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
              opacity: 0,
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                  transform: "translateX(-20px)"
                },
                "100%": {
                  opacity: 1,
                  transform: "translateX(0)"
                }
              }
            }}
          >
            <Tooltip title={card.description} arrow placement="top">
              <StyledCard
                bgGradient={card.gradient}
                cardType={card.title}
                role="button"
                tabIndex={0}
                aria-label={`${card.title} status card showing ${card.count} items`}
              >
                <IconWrapper style={{color:'white'}}>{card.icon}</IconWrapper>
                <CountTypography style={{color:'white'}}>{card.count}</CountTypography>
                <Typography
                  variant="h6"
                style={{color:'white'}}
                  fontWeight="bold"
                  gutterBottom
                >
                  {card.title}
                </Typography>
              </StyledCard>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatusDashboard;