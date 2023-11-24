export const LandingStyles = {
    outerContainer:{
        position:'relative',
        minHeight:'100vh',
        width:'100%',
        height:'100%s',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white',
    },
    welcomeMessage: {
      marginTop:'10px',
      marginBottom: '1rem',
      textAlign: 'center',
      color:'white'
    },
    appDescription: {
      marginBottom: '1.5rem',
      textAlign: 'center',
      fontSize:'1.4rem'
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
        backgroundColor: '#2196F3',
        borderRadius: '50%',
        display: 'inline-block',
        position: 'absolute',
        left: '-1.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
      }
    },
    getStartedButton: {
      alignSelf: 'center',
    },
    buttonContainer:{
        marginTop:'140px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    containersImage:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex:-1
    },
    footContainer:{
      minHeight: '150px', // Adjust height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Text color
    textAlign: 'center',
    }
  }