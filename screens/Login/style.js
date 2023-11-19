import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
   
        fontWeight: 'bold',
     
    },
    subtitle: {
     
        paddingTop: 3,
    },
    dataContainer: {
        marginTop: 50,
    },
    textinput: {
       
    
        borderColor: 'white',
        borderBottomWidth: 1,
        paddingVertical: 15,
        marginHorizontal: 15,
        marginVertical: 5,
    },
    btnContainer: {
        marginTop: 50,
    },
    button1: {
     
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnText: {
      
        fontWeight: 'bold',
    
    },
    button2: {
        flexDirection: 'row',
   
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginRight: 10,
    },
    text: {
       
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
    
    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 50,
    }
});

export default styles;