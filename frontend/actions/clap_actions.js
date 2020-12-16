import * as ClapAPI from "../util/clap_api_util"


export const RECEIVE_CLAP = "RECEIVE_CLAP"
export const RECEIVE_ALL_CLAPS = "RECEIVE_ALL_CLAPS"

export const RECEIVE_CLAP_ERRORS = "RECEIVE_CLAP_ERRORS"
export const ERASE_CLAP_ERRORS = "ERASE_CLAP_ERRORS"



const receiveClap = clap => ({
  type: RECEIVE_CLAP,
  clap
})

const receiveAllClaps = clap => ({
  type: RECEIVE_ALL_CLAPS,
  claps
})
//error handling
const receiveErrors = errors => ({
  type: RECEIVE_CLAP_ERRORS,
  errors
})
export const eraseClapErrors = () => ({
  type: ERASE_CLAP_ERRORS,
})

//index
export const fetchAllClaps = () => dispatch => (
  ClapAPI.fetchAllClaps()
    .then(
      claps => dispatch(receiveAllClaps(claps)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

//show
export const fetchClap = (clapId) => dispatch => (
  ClapAPI.fetchClap(clapId)
    .then(
      clap => dispatch(receiveClap(clap)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

// create
export const createClap = clap => dispatch => (
  ClapAPI.createClap(clap)
    .then(
      clap => dispatch(receiveClap(clap)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)
// update
export const updateClap = clap => dispatch => (
  ClapAPI.updateClap(clap)
    .then(
      clap => dispatch(receiveClap(clap)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)