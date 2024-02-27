export default function Footer(){
    return (
        <footer style={styles.footer}>
      <p>Created By <b>Movie Dekho.pvt.ltd</b></p>
    </footer>
    )
}
const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      width: '100%',
       position: 'absolute',
      //position: 'relative',
  left: 0,
  bottom: 0,
      // bottom: 0,
    },
  };
  