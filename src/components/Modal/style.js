const style =(theme)=>({
    modal:{
        top:"50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    header:{
        backgroundColor: 'red',
        color:"#fff",
        padding: theme.spacing(2),
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon:{
        cursor: 'pointer',
    },
    content:{
        padding:theme.spacing(2)
    },
    title:{
        color:'#fff'
    }
});

export default style;