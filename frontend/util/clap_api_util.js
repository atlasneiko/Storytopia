export const createClap = (clap) => (
  $.ajax({
    method: "post",
    url: `/api/claps`,
    data: { clap }
  })
)

export const updateClap = (clap) => (
  $.ajax({
    method: "put",
    url: `/api/claps/${clap.id}`,
    data: { clap }
  })
)

export const fetchAllClaps = () => (
  $.ajax({
    url: `api/claps`
  })
)

export const fetchClap = (clapId) => (
  $.ajax({
    url: `/api/claps/${clapId}`
  })
)