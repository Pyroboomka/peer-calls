export const createObjectURL = (object: unknown) =>
  window.URL.createObjectURL(object)
export const revokeObjectURL = (url: string) => window.URL.revokeObjectURL(url)

export const valueOf = (id: string) => {
  const el = window.document.getElementById(id) as HTMLInputElement
  return el ? el.value : null
}

export interface ClientConfig {
  baseUrl: string
  nickname: string
  callId: string
  peerId: string
  iceServers: RTCIceServer[]
  network: 'mesh' | 'sfu'
}

export const config: ClientConfig  = JSON.parse(valueOf('config')!)

export const MediaStream = window.MediaStream
export const MediaStreamTrack = window.MediaStreamTrack
export const RTCRtpReceiver = window.RTCRtpReceiver

export const AudioContext = window.AudioContext
export const AudioWorkletNode = window.AudioWorkletNode

export const localStorage = window.localStorage

async function getMedia(constraints: any) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await navigator.mediaDevices.getUserMedia(constraints)
    /* используем поток */
  } catch(err) {
    /* обработка ошибки */
    throw  err
  }
}

getMedia({video:true, audio:true}).then(r => {console.log(r)}).catch(e => console.log(e))
