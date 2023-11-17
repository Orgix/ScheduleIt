// styles.js

export const LandingStyles = {
    outerContainer:{
        minHeight:'100vh',
        width:'100%',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white'
    },
    welcomeMessage: {
      marginTop:'10px',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    appDescription: {
      marginBottom: '1.5rem',
      textAlign: 'center',
    },
    list: {
      padding: '0',
    },
    listItem: {
      marginBottom: '0.5rem',
      textAlign: 'left',
      paddingLeft: '1.5rem',
      position: 'relative',
      before: {
        content: '""',
        width: '8px',
        height: '8px',
        backgroundColor: '#2196F3', // You can customize the color
        borderRadius: '50%',
        display: 'inline-block',
        position: 'absolute',
        left: '-1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    getStartedButton: {
      alignSelf: 'center',
    },
    buttonContainer:{
        marginTop:'140px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
  };