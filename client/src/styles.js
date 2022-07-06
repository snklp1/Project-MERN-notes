import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(100,115, 230, 1)',
    fontWeight: "700",
    fontFamily: "sans-serif"
  },
  image: {
    marginLeft: '15px',
  },
}));
