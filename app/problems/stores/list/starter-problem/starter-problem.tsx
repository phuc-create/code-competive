import { faker } from '@faker-js/faker'
import { TestCases, InAndOut, Problem, Result } from '../../problem-types'
import fs from 'fs'
import path from 'path'

const problemTestcases: TestCases[] = [
  {
    id: 'ex-1',
    input: { s: 'hello' },
    output: false
  },
  {
    id: 'ex-2',
    input: { s: '8jhdsh983' },
    output: true
  },
  {
    id: 'ex-3',
    input: { s: '0' },
    output: true
  },
  {
    id: 'ex-4',
    input: { s: 'nineotwo9@$%@#$@12' },
    output: true
  }
]
const solution = (s: string) => {
  return /\d/.test(s)
}

const handleTestSolution = (
  cb: (...arg0: InAndOut[]) => InAndOut
): Result[] => {
  const results: Result[] = []
  for (const c of problemTestcases) {
    const result = cb(...Object.values(c.input))
    results.push({
      case: c.id,
      input: c.input,
      output: result,
      expected: c.output,
      success: result === c.output
    })
  }
  return results
}

const handleSubmitSolution = (
  cb: (...arg0: InAndOut[]) => InAndOut
): Result[] => {
  const results: Result[] = []
  for (const c of problemSubmitCases) {
    const result = cb(...Object.values(c.input))
    results.push({
      case: c.id,
      input: c.input,
      output: result,
      expected: c.output,
      success: result === c.output
    })
  }
  return results
}
const problemTemplate = `/**
* s: string
* output: boolean
*/
const containNumber = (s) => {
 // write your code here
}`
export const starter_problem: Problem = {
  id: 'starter-problem',
  testcases: problemTestcases,
  handleFunction: handleTestSolution,
  handleSubmitSolution: handleSubmitSolution
}

const problemSubmitCases: TestCases[] = [
  {
    id: '1',
    input: {
      s: 'G2wdB0UAlDd8MovEvtjdtMCldOJCTYtjJAZ693uHwmuMkgAiRSwET56RhzERi9s4WM4lSdzP0HvNRUJaoU7Xv56e4aTta0y2UHCo8'
    },
    output: true
  },
  {
    id: '2',
    input: {
      s: 'iCMokYZM7p3DW9lpsLPDGRkWeAez3B'
    },
    output: true
  },
  {
    id: '3',
    input: {
      s: 'U57ebEg5dG1zib5SJqUjAOoAqDXr87zFS9iR6RFCnpwSZEwQSJGF9ANxys0bsskkhp6i252uNI9I90XBdQpTZN0JDMWdd'
    },
    output: true
  },
  {
    id: '4',
    input: {
      s: 'g1etL0Nr275QBThPxr85DOL4dBbHBY47f0yShdN23TjrQH9ByyXI04FkV3RX2gAC6OAHdgKYA32CmIlFsMQpGptwIuk3xqpwVwLn0VqefqA79bDCG61KcLQgb7iFDKKoDgIFeiCUrSuRENi04PD6r5O0s7UgxeR1zRzKGts1s8wt8RPSFMTrtCQ1QTkMlGwTq4v9yXskTG9eyyBwCAGCrZs49nmCtwcTNK9cYB05i1dQlN9onGRe2YIfgLPbV9zF8Dd1f0RBM9wKy6YBk3ijJW8PCl3DyM7ZV1CTRArJvP7mQQwVycn7jGs6ON5KrJMkZ09amK16kxOWJkHyLlTkf1sx8xPR7Mf5r5AzMpmxWWY7PyGKnApWVwsHkoZkgUumEiu8UiUNkp82JQt9lSXWOZsFKQnjiaP1VKTJ9cFSU7QqCEJSuAM7HxleNbbW7eLtHuEVAMH9ULujgheCxitIDz4pkGNpH0EiK2BWDN687ExwkNeTpVDt8RObPpN3MMTCMRJv3Nv2iR1p4QwrcLd6SVPl0pEPyjBFUqqQbzTojpjzB9WbuSx4DFwforYmm2hL9jHMdmCe46iSA3Go5aPMxjbkZspKKK3Egn7hl7qBWuTqwJtOv5Ao8RAql1fZgcowKgqqh6FgNv64n1vD5ItZTZq5bvQr4vGtPRpqUXC6TgHjdGy0kQFaLwODii72xUvkgrYW53xCOUGEfyfRhWSVmhVcU43UKBtmfYWuTFiPldpAoIhIbVMVfmEwDg2PuyZlyMp1KFaiwHEk36UelPIULnLgMqRdMJuet39jw5XnY9'
    },
    output: true
  },
  {
    id: '5',
    input: {
      s: 'qBA6LJdFX1KoT6GpgLPKyYp0jYXoVSEl2bRLUfSPZCAkv2Yg9Np4FqHRnUM0cBtwTFNWZlQjlE9RbpdMKxx187ZKKYl8OQTYt0Lgra6Hj8y0GeYSkjGk4q6AliriqgGFGmJJsqIb'
    },
    output: true
  },
  {
    id: '6',
    input: {
      s: 'yk30ED0MSwoBK2SrbAoJc6msS0WQdsrBcMLGdfkDrYjOWTZQdAbqMaHoJlO0LqCboaGus7cgkg'
    },
    output: true
  },
  {
    id: '7',
    input: {
      s: '8EOixGnstnNAmv9J5CeMk1acfg1zXESHUVHn1V8qiqaNIj1aOC48em7SKoZSlJea594Bi3DAPbIsyXjxaKMvhGRwl0p2j046uuevvLC16lupePStjPuQr9Ql1zbfuTdJwwgHiok8GhJqjloeZvpjzlGDwG8jfktnTrlHI9GbhWtPBC2vbDV0W1t7acgp25qYJqYe6ehyo7bABV896OmQI496C6Ytg5BiOUP0fhDUVxSipGNk16eZHd5GeC5JMRONBYNdb1IPwnmoQUPbzJyHa0CHpB6JvmVnqA4kRY0Pv91PUNfOaLANHcbM11zWiQKy7JEtYFxd1MOd1U6iOeuumFLAscMmSnHlGsTSi7Z7PL6M7It6DCLLqFO0LFNVGsoQiI3D64ZnbKMjBCP5zwSSVBH2sJoQ0VRZQmrk'
    },
    output: true
  },
  {
    id: '8',
    input: {
      s: 'AkT3DadDO9ryuPMVnMcxBO9z0UifJw6Q1E6BIw8ScM9Tsszz2LbTplQZh'
    },
    output: true
  },
  {
    id: '9',
    input: {
      s: 'qyQtfn00658ZCOyzF59vOsUuS142A9QIdcrPhDhz8lEY9u7zMNyJfSQIAPCUQTpY3GPaUoAVmloBzM0SMIw9o1JOAX4z0hpaf8VbuWnVB06NMvBPGpB9OEovdhzTcx4ZFHDvQYc1Lt9oM2z9nZ12EuvMDAhTvD5jIZKU6PvdAD8dI9357RW7uKshuius5n3phhAXlHdzK22u53IAgtgZlBi6OcKxX6x6RBRwQm6dP3gy4dYMPgPQKFT7qB3kD0yDjyTwRGv0J3Ir0VSyWqfHTXdSGl4RPujvM72TCziCaHz3LXskKfkVmsCWUJnEgjWVS3TiEGWGGfy9VSZuRFrobTMauq9ssuCqx2BRAorrfoH9gz4NV'
    },
    output: true
  },
  {
    id: '10',
    input: {
      s: 'OJKBus19xCl3J6j7TYlYERuxHVpJQj2FCKWxSOrcZamjFI1Yce6eOchussOgLbNe9HnG0775mkgwcuaVVzLphxVoAogc0IMrXBmoyWgPaHcU5v0UMXzda0nNNkRJYbMNZQeP'
    },
    output: true
  },
  {
    id: '11',
    input: {
      s: 'DzyN6KM1s10Y0ViSNmCchAaih08sHuZy83hTWO2xttMqPWK7LudoRrCnGB3pqGha0fAvE6aGzCEtfi0cXPwgVUzZ7KK3Ba2PINP0ImVvldT82bOsdM6YJSM0a7OLYyBHsJVBq125Zjr2ArYce7MAqspJdFRzqv9613'
    },
    output: true
  },
  {
    id: '12',
    input: {
      s: '2Kfs9D9bOyQaeakpDR17ctBPziNkvAG6DmDg0zGmpCRztdRpVAOaG8jKuJQ5OsdNmns4O1SABSxLR8Jt7EHOX3IcUjflawwcyAmxi9hOcBnzKzLaJOFMmOvKRhtZL0LpGAFIe7hFUiqEcYv54c401sa5iaV2RDVjLV1rgXh6LNlOmEoeacfcgRNIXsMWvurSkhBR3nqziLePhYkv5Q1WLrQ8JXb4BNbZ6gn2FvTRFymY7MHV0TjtgPNl11EAEzEZoYFniM3i1qoQqdPm5jpN608tNLA7sOFWTHPZdAlqT7glfUkLsrqREpdzYxZHsEbOjeTbNvxXwUpzb0YSocYQrCbxhxjeOXleByIkcpa9pVN82QzzIzdPDDdaobeDNTeL4TGtESghzavzzb2Zk3yW5o2ubjQkaxRNe'
    },
    output: true
  },
  {
    id: '13',
    input: {
      s: 'DlD3yMCB4D6ll2HCGvbXkJu90iKElxvY1u8f0ehZ0Zt0Jr7GwjgFcqs1mM6xstQTrfVRkRqqjVXVNbcf6teXabmkmxtS1RNDIDxyB7X5035MUndDutPqMTOHDS0JQsajNAk0oDMNde9YoV0v9d49lqI4BuVeluYYWG3qUwVzIBB4jryEeTU'
    },
    output: true
  },
  {
    id: '14',
    input: {
      s: 'Bh4k'
    },
    output: true
  },
  {
    id: '15',
    input: {
      s: 'KwIYkPWwqmHDgY3bF2izDHz8FUfdrGtg1Z2Nj1Z4pNfC5lBma5f0sOWRozi0eL0EpKu1xVefQHNypwjd23YzsXl7YNDZ1MojvSYvcIVpKJCwH1bScCK6CxajoGvST8VmgDbzJCmsqpZz7v3AKefRdcFRAelJeddGmSly0RatoOEIanAmdDrCTWjsa275m3mi4Gl5ahJwIDEnO9yq3r9phJJWHAcVRZxxx0cssu89FozdlxGgU5t5BrA2eWN205ftymlpM0hoVRLWmqHvE3WPgsfHJQk2BwlJ4nYHiHmyp9Tw60tPQDcikvQCa1OcT727HjNwG6SJk2sXCJTGFiEAnGH70R38C6NX7BbuqVmbNVIXsYTxd0kkmV0Qs914lKdpP2L31GXCc2Fm98OGQEfNF0NHMrQ92W'
    },
    output: true
  },
  {
    id: '16',
    input: {
      s: 'Cmh0mUABp8H6yitso3dS2c2xEXsZ'
    },
    output: true
  },
  {
    id: '17',
    input: {
      s: 'BA6It9SC2mGkx4UvswnFGwUTANcUuIYotdQkE2l9fPNeO99e1cqDCQDOfyjKiVdGUIdQXPmD9j8aCRwe8P91lbJsElYfTEBsF2IBAcJboJcgKdqtjBjpnPYOlFrBq9pjwxbuPaxv7patpzADheaU9rHTOY876h6p1cRcLqrNldazfiLXQPXo4H7MuE'
    },
    output: true
  },
  {
    id: '18',
    input: {
      s: 'YRx2eHUZqd9d2laQZQCLg9Nuf0Nq9ZCNrsmTCWPFgJuRW5Gs4gg4L8LCQ0fyqXhE8eIM1HL45M7ZRKiQuV2jxiO5G2TvIbYTcUFcOAoBiz'
    },
    output: true
  },
  {
    id: '19',
    input: {
      s: 'xFvbgQ'
    },
    output: false
  },
  {
    id: '20',
    input: {
      s: 'crOLQQ6pldNSKGpLuBi6b7PaybtTDIKIbfKmUSYa3zZ4IHH8joYZVP89rXZhdkQk61CuHN8ETBG2eckouubRv36ydVUU6LFjYnvuluw7MKCLrmLDjEeDyfxtfvapSsanbl4RU4Y7A9g2VUplcO21VdWSUWmX5LH1Sy2Wz8CGYoL4iqq6yjBg5ZhjYEscRxJNSARGgfHm8wKDm54QyXw0yBp9ho7AY5NQU41epVSJtZamnXSf58RNgdzyckuy6x5IWhtQwO2TkxpEVHR15SQ0jEkT7RTQJbFWyZ4toBErVihwbfaoklGO7FhDOvE0lXeJyDNpMRmVJjmD4E7no92pqPkxatEEbZMS2fUVLkyX8YjaeyRQOxUHqNbtOI1drrcjgUxvIXZGrqggzhZSsGxnZObZ7cd'
    },
    output: true
  },
  {
    id: '21',
    input: {
      s: 'Lue0xqvI4bpzwqzdEnV42rmrtkEo90EHf0KtZAUv6MnEPXZnERHWo1w8jWrRUKNItwKSYlcNcY6KOFSTkt4jGJon2pHcLALZCqqDn8f0uTWUppoFpTBTTtYbL4R29wDYDRvUTI1f689vnFUlR3sD3Q9CJZUXIReSX82FhSxU3EGiwjqmRwjHm1S2P6xEGtIlt8FK3yVxETiI3TjbJReykUaiq7V5Y9uapudEPZhiN4bgJH5HfGix4lTT3o94j3H62ennXLUOELQpC0m7cqpXXTS9jLvGKU7L9nK47rx6OA1h1fjOhMIIN9ECZNv6sbqgJElxcw6th7KFvxa3aan5YDnKSrGNN99RrxU8qzBqYDHySoB40'
    },
    output: true
  },
  {
    id: '22',
    input: {
      s: 'eKtUcwlfPxRUmmR2mVUPZ0BK9BPAjVPN3WyZF89IWuQYem4TF65g6EhtnhymnLSz2Z7jRrlX85ESby3Sj069JUXh1Sw'
    },
    output: true
  },
  {
    id: '23',
    input: {
      s: 'NIV0pk'
    },
    output: true
  },
  {
    id: '24',
    input: {
      s: 'ECCs5pRMqwUnYfMmrNdV4ZN4YSeISOYooHUsoJmMKyu0QWqBUrrEWYTZvBehpWH1vqEjmMCuB1nX5h5ncD2qmfOTCtmxG4qsKWXO3U5ZeoL2VOeOse6yxtoc6zfpviJ2pQVzIR547ijP0QT6TYbt5JbWv76VTFt5z5fdhKhclUAP7qCj9PAgQgUuZKBe23tYHgEdB7fGFYMGtMiwZlmclnHoWOwTAjjjUXtQwqXtA2YH06LtUP9UZ1IAkhgHf19rAauJX'
    },
    output: true
  },
  {
    id: '25',
    input: {
      s: '51xlah5dT1q2bDtcOKjXDGQzNYrR49BxH7WvFTK95nAT7iil2VWyor9EpUIWfsCTi17L9uWp2aYt7N70wZfT6gKfgZMMsAefwcDVDG64Jgf9oDT5yiVYlGO2hczdT5DGDsDZndJQplHfvkK3R9FQAwn8gdFlu8x1zZtkDuL67PuDcAOSSB8ezFbNzKWw1rx3ZxET0qFTdz3jU65tJiIqAekEyyyls0VyCY8IIHFggHhDuE8sR6R9RnjtHPaLgdl16wTopKJud9R3SSzzJHwvMY8vmUtBndX3ZC1iEbaaeiI6XIyHHHt'
    },
    output: true
  },
  {
    id: '26',
    input: {
      s: 'wPR0C5qUDcFVfegKN6GFoD01qXXopTlumKRm1aQ2qhUF0CfOBYKwFDCyZzfvcsEVLleulgBw1K7mnyzj5rOd02aJbhhGrZd23fik7DZphxLnKdj1udvpC0asFFHM34N1TWSxv58ReKQxIJYzVVpFkxm5xz5P8NOZvWCR7PIJ7MFGRmMRhQAdNZrguuYfpg7RZFNqEqC'
    },
    output: true
  },
  {
    id: '27',
    input: {
      s: 'jQAteENkPU1I7OcX9vLT9RscovJwIsnQx6mHqtqhx0WtrBE64UXXZt8bmDCg5BpskPPOuMWJZvu5hCrrOpLcxwXoWOS0xRUNi48AlDCa59FB5pOPbuLOa19q7Klogj7tuTQ2h7s51LZgOG88qznPr5V7oBILZQO5XFzjEdyimnX6kG93iF7IUjn3HeNvdEUaIsLfENJKBf2aMpiTzpyTQZ1i8cAgPQRmo0uq10KCqzdO0CPvJltnvOCpxcGWtx9cOrgrRhBcQPuvlvfhA4gLqYrr6ySuGVdM0Pt0M1Ywy2CBw2LGcvYXAeqm9GRp0PV51'
    },
    output: true
  },
  {
    id: '28',
    input: {
      s: 'ij62okP2tH9iTe7pdDMaymnMc5u6f56WHsqWFZNVOqAChLTyeoJiaq9taT6WYfhKN4jgOZZmRBKsu1GcfI5'
    },
    output: true
  },
  {
    id: '29',
    input: {
      s: 'YBH3YONzlwLxZ7acHOOlhn0aQ4eOGntquz9Exqop2dXWZU2JyvTNMyHiMkLlimqXEgm8SbTRL9a6JOsYFF711CelFniMLKqTYy3wtDwTWqYoCpYoiwVeGUbog1ibrPh7GhV44yBjPegdzUagNJD7D0MduEGaZdfXtnnH5BW4TuCEbm58oc2byGe62rNTGa2YtEvrfoUlXAFrbGvuQUCxn9e2dHokXaTeby6g7uvZTJjo0qy3izCa5vFaiz2pk3leqJfOJSj7zirAibDDZEV5iVd1fKQXWQqVW7d48wx0oF53Rx5RfyEDEbXIH8Bv1DTB97ympelW40MOc6HzMKPCR3hQ5PSrgoQSn7ybYcWmEsiUuIH7nlwNh3UQ0XuZAkvkWfneLg7Wf3SGdj3W0D3tTyXMTu2jv9Rw5x3zaZvOxboYUPkDd7g4ks3fLwQSvCWjry1dgcwypoqRxr9BMsOI3eq69Ubmk7QKfdvbv9OI2oKvxjg7jNRp2hpkeDGTE1Mk1jUoDWDve7pevwaoiBwAiYcdWXBHJqt9LqNkmCJq1n8hflQXV6LafBnyTFZUaTVXcQHowwVbnbWI2Pn7DsZ2zlbIOe70wtK4ygmsC6QSVlPWvRBwEoXC8UCfhhS0MPWoi8DhlX7QLaKiSo5ZpMeNaZxMBWd4QTSA6sRvzwgotFj5aEb'
    },
    output: true
  },
  {
    id: '30',
    input: {
      s: 'dauzxCF0v2wmPjrvYzStT3SwTBbQR7fBKLHqtYtDUbiOvNJzfwbmakzoeXUOWwCZqU62F0J42imhxnvp9cN3Yd7rrr90muwsiC0km1o7HwXlik3k2kxULPf3rJWcbHHSinxUqf4vZJImhWxoHo50yt1pQfHpTfZUcOUC1sqOiZJmdKock7t7bNhNrZpxeC2w2FE'
    },
    output: true
  },
  {
    id: '31',
    input: {
      s: 'vHkwBOU6yzsgtnb8hVrqzV08kVjtC0wSjeMTo8Qdi1NSKn0cIEmCFjKVtPGBDNNLvPkO940r0yOibfHku32aHnjEJm9S5cbPZRBHJlvaxcqdXNsmd1eDW1RwwERP06wuUjShl3fI4Ta'
    },
    output: true
  },
  {
    id: '32',
    input: {
      s: 'QcGUyHnGOO0BVcwsuS4yhF2h6oOARPFODCbC0WKTvj2s5f3MNTbm6OKIuuQ6oq7km0DrMihxSJ0dHojNMMSGO9sSkQE3dcOMg5rDVpNMgh6e78XCdIKFdqxhcpbfWkjoKz3if1vJgehHPhonjU37w7U08WuVEqeEN5T3mJ10zniyO3HTzvO0pjpHSq4lfT15Pqsy6QO5GTQVC6IobrwpFvbOLCujjZjwkzYH7AneAsLC1JgDCaZS366kOt0EmyvAIMrwXywNSjiHWPZO1759rNnmfH9YJwgZ9S8sROBD9BsaI7Btx'
    },
    output: true
  },
  {
    id: '33',
    input: {
      s: 'TuwyVbctTsyzwCqKOJ7k8P15cUKtpXRDiS7IbEakY8Zn2gaR4HhOviQxy9cKiCe5VxZ8iFSn2do6YEti17oynyd5E7OE0bUDe7F8wpxRhHMyUXhz8J3QC403RcGsCOSoa024Fc9XYpW2cnkXhpg2NjlQGPfR6U8WardXi7wTngMRQCnUw58zSlM6qRWX65AbLkrHYjyyWuv9vAf0xYsVwweUdBPatvyfFvlxeNLtFbCjx0rL90SVlGIlgpE4ijPSCojGs2n9YF7ZfYJzcffmqNwde9Px2BkY1TOFa4wRShbPJrVQeqr3wHUswYrJ8yo3PCUmXq2ISEsiuhCKKlqYBjbc0dDClDkrpbFIiCWXVCK0vLRBrSqVpBnMVhtkvU6Lc7UW8akd3Zgu9gc33Zqf1GnvmXH9s2sEUsRbBmwiPcqOz722TvKRn7fsKyF3UDSdKPZqhu5Kctt2J3oNvwB8a3UKOATv9A8UTACzK0RuEtEJtbJnDiYciTt1DgkEKSkpGFInA9U4VjFeUtxdWFJ4ej3MnIEFEMEjtVEYBJknRCiBReb8VHGHBAJzIgex2aYvNthvCECuPVfQ9xuOpRtqCG8PjcVBjM33OP0F02z0QLyWLYCN1BqXlUEq9uUv8j0b56NL4mFUqLOEaTqAwCUnq0q6EcH4YDJAJQRYinvpIhQV3oTEYIHvCexBxOmWM9aUlnyvRFFa29klqwfqfP47rIlrfeenOlvJ0suaobW0FqPLMEITxGEVfywwDCE'
    },
    output: true
  },
  {
    id: '34',
    input: {
      s: 'zRgd3pFoA2wMGW2Y7YclHnR5jjhAbyuMpMN5xvrjf4qXEJXoIjJM1rbPaff'
    },
    output: true
  },
  {
    id: '35',
    input: {
      s: 'GZqH736eRsRWPbHfzXvmTVwyA5t3gRd2XLW1TfRJwHnOpJHEsqKDLZc1I59vJEq0F93xgxQ5C5kg982I3rVRZv4YBvF3WVkhlcqbTHlfRkuWEx9i6jmpC6W3twQgc3INikL1e5jYSQA3C2hHWa0tmUsvcMYgnu9jTFRSDPThVgYvpSMmRjcGl7UFz5vJRQT5'
    },
    output: true
  },
  {
    id: '36',
    input: {
      s: '9pZWqnrlQYPKpUAYo0gWGKKT8IgRm4x5ws7LXgyYfnjbhSOBRhFvM0T'
    },
    output: true
  },
  {
    id: '37',
    input: {
      s: 'Nsq5LLfptA5K4w5adG2UrRIXBg7cHYK1PGQvHzHnZ0HcqInenr0gw9xGgthnS4wgrhXPj3gXMYDHX68i6KfgPSnne9RyKUS5JxcBntcUBhiIlDkG6tMhY18MWvvAy7DpFyWl3seqJr4oCXTEjo0AJ'
    },
    output: true
  },
  {
    id: '38',
    input: {
      s: 'qh5FrZhhlCyHKoeGV7eeHTeoh44363XFXJTcAkiFLEMXeMrvhbr9d7byxkWsXnrYEb99uY8BnNtiNn4XdGflRAjq700Bz9XnEnuCmdFpFr'
    },
    output: true
  },
  {
    id: '39',
    input: {
      s: 'HYhxoPGFIGj3w1oD3f3mAcUpkVF9zjhayDNkC'
    },
    output: true
  },
  {
    id: '40',
    input: {
      s: 'HuIgeYVrNeqwBOxdntvH7GBWHwUKfd0cwnT3dNKkxj9HjLZaLi0AyWamkbJUpZ1ErAqLkP5YcRltPVFZoXHGwitb5USJhxj38Yu0hPicPmMcCLq9Yci80WekgU1USlhqOo3GGDmx55apvgqSLzwjZGnXLqoMv6plHXcrUohh8CwMipBhh4xrvZHXkIsQaQcqlVZU5CEhx11UpnE59SqVpwkCDloWt1JQ5oCuaEKieu5nA0T1FIm8zJIeZRGtwHC66Kva583lMjC9yy7XNchyt3gMUHrHIhxlE9n222LRgwYD02OSjIHiEkOWaKn4N35EJZkXtpipml6cxvPXSjfs9OTPZ39egAoy2KZ9Ulivn7T3MquKplsd8adgLw1Cjz5WemHbPlROs8c9hOlDCYczK4cX0EXn8FMCsOSPRyWrNfuZ8VgZDopwujjgi1hTQSN7cLo7myiAOEVDuCCda0paiCpceXZ8uxtbroItUORmfFWS26mczqCavkBEkoLjDb4IQ7raT7lLFQGAmBj2i7YR6CJWh84BGdyLhaJDe1tSTYhO6KNtA5EizuobRE3z6rhmVRgyxB2Bv3LB96oXqOX5FIU2cySI3sx4pw9KpgYZO6tQqwtZ1WiuVJk82bwS1ybkx2O2eBTGi1TuoCC3vyGM0XNkKZn5XHl1KiKy6cGN7ThqWCBoKAd0Tpflr0rtqhhzHVGsPtYVUKdhYeF07Mo46K8TqDw1JEjK9zdVCFHpZtkhNLtGijFDZXH7xBQly9q5PN233FNZ'
    },
    output: true
  },
  {
    id: '41',
    input: {
      s: 'IQqOI5IC2kncXCH0RqCLjigPciq5OeMlqD0paVNq0r4cZ0Hwr840QfeUZFS1z1dJr1YNAQQjYUfY25r73KYlRTYtSa6E1DPLOtpXrBjWHrU6KejLs5g8uuyCSBMgfWklSdppaCZHdt80dVgB7q7eT1ka7AJ'
    },
    output: true
  },
  {
    id: '42',
    input: {
      s: 'ter3X38oBSVTCHk0P3L693JQym6rgdsfrQF0wsQuCvec3G3i1IgEEww2IHf'
    },
    output: true
  },
  {
    id: '43',
    input: {
      s: 'aXxZpGWOCj5CXWXdj8xLGWGR98SJQRUIdUttVONRLblEznaTtlvZYybL1iUOs7eesJzqlC2t2xzIlMyK8iOae2QCWbZGxT3n4NHuSI7ZIVpXHYdj99ynFuo3aojfaVBbVMSbSa5oQ22olFavspbyNAaECW2ym6GPNIzmNIfbFE20DZMlksYK8SzMyFyoolyQl9LFYdMnDsJrcxaUwGURKK3IyU4GMQH6nopShIVwKEzZ3QFWRO6oD57Miqhd2nPefPWwxdZECJwDfnRlxzowlqgwvNxAWOQ3fMIFT00VnCumCXAb0AsZi9mSsRRGYvWSNe3KpFLfVHo5QixWUDZzdju1G7raYBeTrlb2zbhe1C653UROf8and8gSTyTUyGFeH2u9T9XxLfspJhQG1EIl6frFnXfQpWtarkE1fZlTi35wSRSRniCWmZdUt0oPtrl7GeKtFi2GdDAXyMvthS3i3NLgX07g3th5BJMcrL7kqNW8NwmTAX6fSTVnnAc1yhcEMN1OrqR9MQ1vZf4svXmWzxaGaOr7sCTTuYd6tSih2NLrZ2QY2I3dvyikLEcVMuGAqcFYKZqkkNRc7xLXQuFjheJoEexQ2wjEQh7iHUpVbv9BvQNIIXKCae0iPG29GNjFkDTLrzwN80rylI7KeNw04pNMfMeC4v1fXOnIVsHAWQsTB4hOREZArE9szbTmfdS0w09Z'
    },
    output: true
  },
  {
    id: '44',
    input: {
      s: 'r18lmd7eU6npdPXwAS9p3Bu6HQCWcLz5c4Kjvz8apkRZBsgKs37Kvq6fv00VuGbEmFgFzFBOsS8lfARkVdNVtaeLLy8Oc8jCr2R174VwXUQxcmM7Lz9Co638KbZdO2JEJ0ZtKyYjKwK86aaga9WR23kb1xVbJjJlRCv0AY89JVwWOMZFOdldvksBToZN37tBqljpjhIRziM5kDBsQMov8LmUhAu5FdHzQYqnp0eiUFsDVW6Jh6fb9vUIn7Tg1THQZLx2qgCJn4jV25u16DDsVuwIouz1zj38Qmd1AAEJwPsrbPKishtNLTFDAtdULFSgFDlkCrDCDrnDrch5PYPug5VofKZ1e15maXttwWUqqDN4oe0GMcLVNIusECEqVXnJ4jCA0S72aateJwa9w2KTyHaCWTG3bU3H5WTowqMurvv3X3CHOR6kuNVbZNHORYvvvBtzekFm0N5RjOv97XtuI6mT4gX19yT5ZP1EywcB1Fb1WM3zWbeuwLJLdZui7ZVj9xL3tv5C1nIA6'
    },
    output: true
  },
  {
    id: '45',
    input: {
      s: 'MHSg4AZkz8OzS9di7Jk2Vgz7kRIkuC4nRNjb6D4jiE9AZVIkbSATDVVRpaGG2Kf'
    },
    output: true
  },
  {
    id: '46',
    input: {
      s: 'v99ZbosjtiwgTXJQPDt8QFgHgtSBzVZUfe179h1muE2PAKVIYFaGOtQvzfruf2SbIc7GANhjfaenhDasWIGFx9XM5SMqMDE8sGprjohpGTg6rRj8tZISlW4oq30gKDSIDNaU'
    },
    output: true
  },
  {
    id: '47',
    input: {
      s: 'dfYDdTqSANNYin5c7Mwd8HDVqcFlSxhJ5FoP9t3nkyJxiOdOjoaGSL1jYlrnEkQSZE7rgfGJKJsIYczjWYLj1OUrYxVO1gn7NLezNSChwEdYPjWwToSaZ9OpoaG5GwxxrifdiXr9tLCQ1JFcmeHqL8rCopk8zecQPDI6YcYXrvuTmwQ2542nwyGItHJABsQ0Zu873BLUL9RCOjy0OlpQZxFLTIleNO8GUrHTCDp9VXrFYOPbTH9FZuGAGjzBhbbo4uJRkrQa'
    },
    output: true
  },
  {
    id: '48',
    input: {
      s: 'SDNNFQZU22SBwAJrqV2eSB7mAssoAjNpd3fdT1OlYwx8PeudEJSCHSixJfHxupZjBobcowAbPuC31gqHm45mJFsVQWtErHnP3Yjbk99V27hhRsr6lMQM3sKzwC2uZDR5VI3adcDPqalqpneRz5FMh4i'
    },
    output: true
  },
  {
    id: '49',
    input: {
      s: 'DtyBXcDUFXLaMwZ0lwFAWROdlKyuPo2DxPS2xf3dUSVojrqBMugVATxQI4pkwTYqUuHvTmeew948Oh1VYW9zmjGarhYsurJCj0upcTnlglhDx2aJT7QaCdtfCZL93zrFXHyFasNNfKsw9NvxfPcnd6F1hd7mrTS6SUxkbMfQD2dsLp01ckpqWEQ6ZSioaFpszRJyxeUppgFSgyEtkufNXEhN6fYkmRUjvpitc1XWDJLPYYME9JIqfCCb7erlvkoIkgs5ST2HuX7XXIZRj2XD3NEQzCTy6j2NsaxLIC5WludO91uyFaKK4TSN25PxzntaQPrBDn9yoXiDNpXpqQk8gT6R6h1yrBJK8XUJSpMwDpjYJIwWbz9zK6SFBnP'
    },
    output: true
  },
  {
    id: '50',
    input: {
      s: 'Ow4zzHH8D9KOfb0KlSUi1x4lFvt8Xjv3gvIqCdQtYjLwiHq1oG3qdpSp781sMn9MgTGqFwbmqPY9MSMYvK4OVBE0CT7p5FEwAKq9TKbkcY8Zb6rOBKRoOXqurIAAHOfjq3p6D4A2CfFW0eviqKOpwWwCo6j7ZmTzNaxFXfODB7JmyX4MTHdJycq2oRP8zNuTKKPCSH49EuTv6PMCQ7WEcEsUY7BFho2gAjRjEx3JtlTohhscf3NxhieDz64gupaeucystvi897rkiRU0Jd90kLZnN5mq5MqUOilbEjUODj3QdAeBsWL45kz1bzo454j85e5Pigu9N2ygwFRvhSpSlxNT9iD0hjnzGLbQ56moGVguuPwRXFo6iuPGNwRRZbZZ9ZjJ1KobEoc52Wc5rpQ8tEMfrlJZy2re5YLac7oY82fv2EAJFP3qE4xDfmiVHiyBMfIrTU3RmxEH1'
    },
    output: true
  },
  {
    id: '51',
    input: {
      s: 'jpcy55MVmLmhqdGkMwYgspKx7PNb3SjXZQOA6OC1obsEsKsnhUH5H4Uv87NkdbkrGCoZX582Ow3NTJlTOuKkiKQ9824AKqMLgyijZWkpIZpA7kRkbyP91KIxdgN74nD0WTegDHmFvKJoUV0TvNf1FL7EtyNEfkL5vCLX5ZjL6IkwazUbFA9My2UyGeBw1gkorVDE39foSSwOvQiHZkq03fFWWg3T9i0WAwnPy8BQ8dnkgFvOzqbVIzEtSlNUsUxrsGP21SGrKiWGSTZqbMwIJgjVCnCVfVDJF6ZktxO8KuIlHSlEA94U54138mQ0jDXUyDVabvnHN8E6BvAzgI6fmRJ9P0V30hNcwwvAvD1WhDZmiK49tl1AuboGSUAYvFPc4xfFXZ1QmyyzZl998ynD7UvCbZVmx0pDg5MF3MEKF'
    },
    output: true
  },
  {
    id: '52',
    input: {
      s: 'Hs5iZ0o9hC7weyQkRqh36RcQTEq2D5I99FXFoN9QfRyTobVozi0gzLGa26ACpYGLssQRbqCRMupnsxFXZzAw6NA7jDvl8QZVMxlOBUyoSZdWVoZnjvJYR4Hx35tUs3saGzh68wheAwBUZxWhQhAfbl6cFmUJooH5BuO81EpAxXJLROEYruH2uJIsMbcLN61y3oiDhCARCmQX7GFiwgtaTA5ca9WmuuXkqTd3oDS8DpT65JHNlzUpp49tDyVeRsSF2EsaKa0hHuZZvJJX9Q5Vk4A6o0Yl6FRefVcvgGqhIW5QJurcEMvcPgyzowrG0BNZ0DzYlqwub0uuQWDI1uEmWtbaOTOMUbwO3Nd3ZyiLbR6NOC7noUeiNaedMrHU8TfII31bC3c1JmXqaZGMG7lT7BmYDsjlTFjbMbriTs0Xohw6Smafl5e3MtCiB6hNPRdtCJjgzlmoWmDFVOvgDRAlGM2BfEzkdHrWw6gtA47DDqzaSvCfOPXFCAT6aopqV1FYJxUjjEMQ6Z9xPI8vxDGKsD3LeKFkHmW7wg7CHKC5az5miohslTsily7R71RX0kNQhdkdNhaHtLR4TWcHTjif613aVytIcA464AnpZpdLlvCnzFaipuSWSt7cFdfvEKrCDsVHeQGenzfg3GXlrEr8ZE6GW6IOt5XgpOJrvsWcC7enVPae4tZE'
    },
    output: true
  },
  {
    id: '53',
    input: {
      s: '2jKG'
    },
    output: true
  },
  {
    id: '54',
    input: {
      s: 'LXvGXkP49ri8XkEAjuhYvvhKXCQJCo9NsMS85f8CheIVF5l04xbCATY06vEwaQgakQhhtJzpNBgKvqWDk78AZ7GSUJLx42NktvxU75t8pQzshiI6Ce44NEvLZBKtk7izxGaNFF90jsXXxLTUyCA9mTtUrpYsARiLXOvHG4bpYqoKN3hTutsLk2UfxBEwU5DGqq42u4IdgOdm7Ns1zsdi3lD1RCc9Age6NdamPV1WvowlH2t461sUoQFz1RwALzoMvlPLUzvGXSNIm6TZnIh8G9MN7FsZVJ7zS7C8H4ismYMV39RpBhaWtjsBbdHwdsrisvaj3eFkMxMsKtojG4Dd4UxLwTjoT2o62iNRmWM27rH4PW9yymEO0eAOzgSvMPstgFFzRy83Mr0YtFt78zRtq8Pc6C8JNhpr8ihNGEe70G5raRtzJxgXzxCqXFh804Wlg7v8Ey69s0UHY8ZPHaHpzbVOVytVprD1eTTST6OvNnmIu6c5nVPQZ0VD6uOoDTSo7LVZWf3aYn17IpygTCijdqwvmyVVyIX0EdaXkXvpwn8agyIkS1wjmWhjwCtIidMJtIE7louF80bIQBQsHt28H2cvWbCPxunUeul4blC0TpNgHxAGPuy2v7Ma1O5NMan5VQejoxa'
    },
    output: true
  },
  {
    id: '55',
    input: {
      s: 'jhiXVIM7QSqPhsFEYVYPWL93j6Si'
    },
    output: true
  },
  {
    id: '56',
    input: {
      s: 'rsxg63LuHEIg9U7duByKYPiaKQW6lVx8xRIbOvxq57E46DdvkpCVbZ8qC17jRsGIY7kR7e7WnpTTPoxmk1LDoMTXTm5JzNO7Cb5RdfutrwseF9IsVDprZ4RpASv2XeYv9e980SEN4MUWMWCtck77g4s1v2NmDqEmeZ7b3rYHz5kH8RN79YUFrSPBwBIwTW7jKn6k2QJLJ3xq5FgjNMu69FdRpJR2gjE0ncGLDTeFujQyyjMrKaaVo2ea95bo18l9JN1jmhwmv8SC6hCBaKZ50XeIOINEKPKwLZuKH00o3Puju80ApgZUk1CkloFqc8Vk6sSvGKjNZ1wJTV3RkB0L8c85WYnFSR9HnjmTvML0sV3S4pBqeD0yIMVJNNLJgbHZcVa8zBsE5dt2hdKCwzmieED97Z70svq535OhQPVBIZZYTQi4zwBM5Mi1IoZntPUDqzeqZdNB6V2LhnzgjwX7IxWmN14uzE2xPI6fYwrfglLp2CVhFYm24AD6J0S7WCpwcXoLHzK4NtyLf9kDDROAUJG98rVlwKtNkM2qKzET8lAVme2EZQVoA5aWLUFzLvFpxlAks9asqSjzvrdXioswQnuq7ebgh'
    },
    output: true
  },
  {
    id: '57',
    input: {
      s: 'eXlEOUE0uD6RQD5tJ4ggYLfsfSFxdd0aHVZYWovUXmsCDDwlKREVuKxfC5jMkFvlN3CVNrkRvTCS22kHd3QDVcISWBoDvGnBqP22Z8LJ74bRQ7N2ZZ5IgRHSQS6JHNZ1cDrOsfN0rkIf0Nnmc4Zc6NxrH5AtlVKmfXAJV1W'
    },
    output: true
  },
  {
    id: '58',
    input: {
      s: '0BOQwIWA7CFXTqK1Y1WgVqccxYESiUYEHSiYCv1aGyfnulzqsd7F6O6IFf7qmVH4jrYbjvUWUQpnESjERXoQ4tdJyL8obAz3GTW8VpEEM5fjP5MQ0m1q3NxiJjLvfq6gaAt8ZIhWTefb3mIadxbAGSUyUlC25CnQykKQe43kf3zszy84Ms61yK1X00XGtr7u5twSBzIrcdRF1m628pMneTGFKiGPfMDZYK3HKuE2K8onR7Hwuk6EIFAjsmQ6txqMOSYlGMG0CxIdSzI7u6Xm1z4Mxx47OvggoUwApzVUqGIIUuLmQQAQWS1NkUVPHqzzsWRfIZDHLBEq'
    },
    output: true
  },
  {
    id: '59',
    input: {
      s: 'SQx4bICkDSiTScl8Bj24MBUWw6yePtrRD9rsww8jGdl5XxUhbgWDDlMQB71NB5XcXMx6ww0ILexYz2cPr2LS5LqTE3lXp3l8NgwqieBbqey6Xe1ATKNZnt6R5FJCWfx9j9S6xhnyVbFTvQ8ZntDScTCd4Uen7fpXI9qVDuDQdKEWZFFNzIQ004By9UpMiLlrKh8zb0TeFUoGvnlU3sl3UO5rH0Iu27i89TPPCamBZmtMCphtSMjtQmwlK1TvyfIgHgMRcqLetSovCdRe1ioHeoxonGYqnNEzoc8roy9SzFLKLiviOL5ToX0OscL7XsNHVYDmrc7ovNBJmO9kc0L3C8HutBYy7lIdvM3ezeYWkt06heudHmzlgqKJnnkpaNuKG52ydPKx8V9yMQbM4BKbve7rqVwxWitQtGtpSROJ8a5b0TMr0c1Xlm9BntI400GWrGW4TikTxuclEfteB5Tyqs7NL1mFoSwTXAVmkhmWMr5GG7dvSIKdUi6rbktD30yXoiGFKEDUwPhpeYbnnR8BOxVRHfg0jS1yP0ZtTrXR5CONeEzwxgRO5PNpP24ZxVXtqX8LLseT1Abrh6nBxYiU6w67opQnPJ8TQrS8zObzCAnKEWq0d6MuCd96adZAAxBCzUUrwua2tPfnQJI4lr9PZZmJBuKfxvhUideZGjp2UFMcOWTNm1Ec6oI6JHiNTeUuHX33xa7hJlvtt4vhRrBTHRslP3r1uAF8qtaRy1fxD7LnMyLTQ0Ad0ygnkR9rxCLotltvfcJoJ2MbLdY9iELXxODg6JtdxspnmmKdgcBU4pxW08u6IpCIxJIN7c53FcNfa9S1kEy8Kpa41FvMDOR'
    },
    output: true
  },
  {
    id: '60',
    input: {
      s: 'J'
    },
    output: false
  },
  {
    id: '61',
    input: {
      s: 'U7WNrzwqRI6kkBdF35C1e1JW71lOA8zpIRtckdFpZUJOlTBYk57YMSUzZQWPGfRqZD9HSzHWQz9LmvTIHT0V4quPnnNyTTjedI5aUNbhyb401v6UcPoz1ugaFvbZob6a4IfqtFQZhOxu0JRYqOnFsXBWLTiSfcxP9S2WPuwViZF4n3Za9AzBKb5tUPvwMpaeZf4DLt0d4nNDuxkAdcOAzmRBkqSZqCorN5r4nppchscUebJk75qDUgx94Syb50SfhgWtDJVVv7KMkmx8uDUavAYGaGKvHGavZhu5jBVs1zItdWpAH5ZNgYZd34LObZ2u8KDICLIY7CmRQ1KV2TL3TCMvca8nmwkQwf'
    },
    output: true
  },
  {
    id: '62',
    input: {
      s: 'kiNAISx63592CuJS6NWi7bajS08e1vREyAFKt1oGGe5PhVVYqImvLELzkfvjJo1aeJr4b0ASxT6WsDhS79ZjcZV6vsFNcL1ADDMpVn0vsko8V3hWoEdnOW4mbd1Tdz9vOL3be5lUI4qzs8Od8noyUX5YiatyB7ckScnUbZbB0cAxYqHu87O5nTlcvyLJy4PK2Pv6AoFaniPQGdAZuhmYggjfliFXqjiGAxvXaBTPx3WqkFDVKx3z52Yj8gguqrzSingLW8hoRoeBf4Wh5q8Mmm49nHg5MVlBi41SBv60SkwnrqaSJ6ZkMGfLUAcOXhaenYzTsh02t6lx6Z2l5vdwI2NyacNXjsEJrptSohDfQ7vN7gWpzzV5OVHXJCHy1iDPTpVpDGDNBcSngUJI0F34vOWoRVud512Bk7QCdncpUDxQbRTdTgQbqbVyQrWtk6RTj048ji0IliIkd9D8nm8dwm0t373FuGQYs4aJFO8RRLuE0O8ajvcb8mRyeURsMWzpL4aWEJUJnpzWqdviZlWYLQGsWpAg41cO'
    },
    output: true
  },
  {
    id: '63',
    input: {
      s: 'YW1R20cYpym04g7LKzxD5FMnpRU3o2rdYpgMKnmcUaKAzGJIOZYi2tGtRxd2MbPJchlCBDTgOlgzfNobvT7AzIaGivGxlfhVsND8JlYKvO2yDWbJGhyH98lnJJOrioh7OViJkRzjJuD5FLdH0wGxskYmVI0RV4xISJidZP6VioeLO8S2FOjzgN1WO8yaPznQ4IvMvhrlvZ8syaxuCs1EdE7a4YU3nZ54bZqaWslRvTXY3jgSbxfTdMzPV3bSFQekzaBCUcPZfmAZowpUGe5PyQsnjVvakqvJnCH9EhwI4QXXiOzD3qg11mtyKolOFTJJxXYvWD3oyLkVuUxH0DCGPHrByiaqcL4CHnTW0kTafWBfyq0V9Zb3x81IiKs9HNNSmgnbodpDIOdiMJasytkRPya1BTbTpD0wIhqLzhE1Pno8dunbmjv3FA18Dd3ZzKAI4omWFNkzJDMaEalELURqYMVnXprJ0U1EJGYqHPW0if2nHX8j4NCpuIBI1bJ2a4SxljX3iAbVbHT3pldLU1vXhISXmBh2WiGZuNCU21uxRLVz58XPH5Zws2BmRKzYjIAHhC1riqMaFWNuDNsKWUec3WaYPf8a9iTGdSiUGcpWEts1E7LJdeFcXqb3k3wBBmeXbAzLuZmaxGYBUXMB6cyV8gC5B4OhIgiYYbXEDHLlQNWYfUBdW4n1eDi'
    },
    output: true
  },
  {
    id: '64',
    input: {
      s: '1f6NnoCsnNnUfA3kIuVgbSGcbIzKeGhNNi8WgpiVvoXCJCxsDSgaBRChmaciFCnJJW85BDJyAogGC8djsrxWABTBy1hO0XM2juohwTtUdekwgAL1DOAO5t27jMGpoD0ArcMcdLHQUtWoBOFtWxEZSo5ljC2SDnHEfrbWYe72BkAiJkNvDYZSCuYTQzeZ7ESwNt1bOyNohhVK5RYeQgRt24k9DsUIOfbRUdSnrBfjrW9Y5So7FtyGVE2qttnbhsExj7njfikeg7nAAeiZ3ZqKFCUJbE4oDCymkxcLFUM2MGLd83oGinTuucJymB7i4iATSeWzAIa6im1fkW27juRNzA2cDjb5a3mI2bb6d2ubP0sz1vL2nzpZ5fxWjDCf8AlCxPZQeI4amrbxEdTjWkoClYLcsuIluyPFFSL7XeipgnLvBfPTwTOpMwCr8GPQXeHmr0xsFn2bd5besY57l4HFLb2TfUCKYSNINho3uJR1nlKjV2AIfwPjAdbTlcoobwhMYKWofTwAbM9H4Sm8hUV7uvHVICDNHnwHLVL7XvJYRRtQYcG0CXsOJ2OCKIlUTL0GFdzg8Tj1Djyd8LR8KuEOdfTEdYwQt4UHkVfNPVY9MVBgiy'
    },
    output: true
  },
  {
    id: '65',
    input: {
      s: 'fwqOu58RyzzAjW1UGAf9LHCaamWRKXKmb3x0gOe4jpgTn8c0pl1TTVS54qrt7zgvJdQ4oa7K8cDLRdJDN8h0ph47FoKuobROPSwgVcDhRDYErHxBcMHG8Bwl7wS5Ai2unQr8dvvrJEE07ys3E1lF4AaPGod8PlTKNQ1KXwB7GbS0gBN5A6rqgSWLH1JvKGqWUIKczqhT5D0AaspHEDgOTzil6Ut2gM1HMLcEXXwV7JetFDbMpddGlOq5doI7gwS6Xlm7xCQDck74YflxV29cx8XQeYaB6QQro9v1HkO5eJcF3OJ0vJOyYwos6EB53h6Z4E1CEMtMeXFzGi0SUcZHPWXcJUzffNcc4TspjxFkqvkdOyfyPOPFP64h6fRbiATgJbSO8bkdCvVfyJKYLTCuIK7gnnz1ar6mSTDB9lW7BRWeBch3eHNDyhFT0JtJpXG25ICECnKzWKonSb7CqXmxBjCxDRH3U7jlYTMrWWphpMMlqKDZ715HQ7o0o7YdYsd8vDGgqsPtQL6g0lSTUUV7Xty66ARkpjNrSTJd9MQAEuiprdSTN2syTCYZfeCRvhPvja1C5vSUX11VsXg4JOYEEQBdLnGJd1deIRX9hzMK9YbwCLobNn02AROOqfF76MmjGMO5AZM3hMeEsMrpH15qD9f0dTjwLKypgDEOYwLDZOibyKbwzYXfYSLwVfbFbItnr203CWhQeGlHIJZEDAYZEGQqT9R5UQKYVIpNsVnLk8KHeWKwcNURN5jGc9Bg1gFOZroiF84xyRsNFE3arqmaYWNML9arWDfeTfG6OnXqbIPO7CAuxRYYkiClFYEJwaRlHsmCscYs6kTq0vsrIYlgfY9yxi9COEdLUNSADwaPrV5kvmOosGZp7atdxqQPe3AO4RWRkcoLAZssWFWhHkT'
    },
    output: true
  },
  {
    id: '66',
    input: {
      s: 'fWy4wYUfahzCokaV9R89gtPmVdPjfEWIonri4s8HnXYswqmb4kJtUD29V7mPFytyKwYQj5YwNwxmOHDdkLeXu4furFJDTIvtH5i8MRcirJJMuxzgUVpvS8iv6rfYoWE1ITrNjMcAQjyv9jr7sUZTMb5ojA71E8dz'
    },
    output: true
  },
  {
    id: '67',
    input: {
      s: 'RygvTUQkCJZVmbhlJHebQRzbmuvZBAiUcTcxCmRY5rOQgyGzcc4KyZPVJXT0jjmThi9YHX6N0jGgyh7EWG30zTHRd5nkMw5pZqmcccCq9wTZKVMBFz4fynLzKiwTGnlRnC7vKCqWXiOHbsVNYLpexx3QojyI3UEh9ElDHCRnKtvbzeUZJqz5195Q1CMXx3vyyxkcLQw1yghSTnTJkqBdmmYPOZfVDs8eh3jVvCsAt94c06v7nlF4rSY6Zzbzke7afShFHShJxdhU64ivQyFP6omKvadI72MDc7Xq0hEteyk6Zu6smJvwRafuUTUZhvFLEGXlXOKfNdEHp7RXJreziD2YPchaMttZLeSNsmWdptttDaEzAIV0TxNO3I4TinKahkoLIaQOQUCczAD21h1lhS7sSchUwc5f1RUmxYILqLnzez1cxQzjzOcH7OLTpIkU6vCEgO4di5Xfp75XEDqEFZUaGodo7k36RE6wVFroPRwNiLvEGqOZaTuSTtMBrLJY4ijE1wnm3pQGmo26Xke5IwJpcd4TqAre4RDcmZ8WkL0iPVOMOp9EP51JMIoDgtI4oEk4aX8MPpDASISImtT07CObU4RhMtYgVMXJUektGI7QlhwPkaJsUMBp6ukJVzgO2LWBONS8MYFK5xuM23RIQEjrciOYHKaUraq2WEN3VtyqNwNhxXDgfb0srkLBmnjf7EGoi18JwFCy1U4DjDGPI2aQWyW60qdvesFF3PpcaPFFwoAFEjyiQrQvl6FqgZQP5F3O24BclaLIG6XkTyiwkIqEkhs9C6zj8QjINGMZPrb5LgVFvZpwfGg2jHskW5a3jShdOGEihTus0Q6PrpnFzw2QTVzQ5zwkbU1zdAF9PCCGTxhlbqgNDayAGhkhY752O2oKiN1TwX0dC'
    },
    output: true
  },
  {
    id: '68',
    input: {
      s: 'cfxEpkO2bf0VbZfHQssBvBjHNZhwtX0vLlR9ek4WLTvwp8T4jFCVRwDS4u4wSs5QH'
    },
    output: true
  },
  {
    id: '69',
    input: {
      s: 'q3vG23LZuNuFlLHejWCMfegK7Oah60xvebrxbECWUYcYS9oA8gyn4EdCOrfZjvHzI6cXn8U55FdjSWxA3Iiy8zp'
    },
    output: true
  },
  {
    id: '70',
    input: {
      s: 'c0LUdaUAJfJSu1Yg42WoLhtuG4mF4KvvZvQR5ntP'
    },
    output: true
  },
  {
    id: '71',
    input: {
      s: 'W2dbjGE5AFHj9CjDhSLak1bgh2MvjLUQF62zzZcC9iAetQ'
    },
    output: true
  },
  {
    id: '72',
    input: {
      s: 'F4dntuzscAme1mYJFjUem3GVdvW3DMEBa912JLsohQZFnOxdRoyj6FWA'
    },
    output: true
  },
  {
    id: '73',
    input: {
      s: 'HSfrkvnE2dEYPAuY8U2CI6ZEDniWyYyaNe34i2KadxeXJFxTJ06IZp4Y1l3z3pahY'
    },
    output: true
  },
  {
    id: '74',
    input: {
      s: 'UMaGXb4cszjZtJl13zTSCkKwn5aruNBSiL8UW99omSO7jjjhLOTM8Oh7Ub6cymONFP1De2ZR7BcibmOVpA9KmOeJyOBTW0eHkVepPAQXawD6AzTkFsXjfa01CGXkuB2I5agZnYZZIM7zRSQ57MMOcuhdfghMFg1yzUz0EI16QD4C1ZOVNAOxbZlOWvAREjZ8jzZEVrRoOalmVkUxrWONt1XSU7Nx9E3V1L1f0lfGEjIMaAQR1p7ilzN7QiJjYtC45krJ7o9'
    },
    output: true
  },
  {
    id: '75',
    input: {
      s: 'PQFm6wKl433AqPYAfzX7qWiiCs4sK3LY5rH2lvAE3aCziEN4Tzmhz8f8ZAn6wCaoI6XSlmDwqHU9Af83tE9OKnMg37PWCU42SB8KWT5SAB4hoCVeBLyMZrBgXwAuQDzu6mYv8jynmT5nloGcTafU5wfybJy6Zf0vuJlifmySFF24uXT2XkD7elClFaaGS7PU8dwusO5tga3JzvekYDsFz1BfDuHwsHjVgNY05EmJeBHVbLLyroBRkjGIpf27OQ1SMTxW4aclZztZAwxMMy3idyNd7nWGQ3L0hXvpdJjH4q3GAJCcX8Acp3q4GMvWEOZSCrsuskUVfxbmtwd5umjLGbnYH59xZJgyEKHfjswSEZ6XlByf854TWYolR5xrUWRt0adzhmwooqScngBttEXoPrYG3JBkHY01HhUATX8Gx507am3fxMOjOCiXWO37oQ3FORchJI6DUTpVOZIRDn8tFtKIbWlQ5n2j0nIt0lprqHNJWCM1lmL6bZ4i7KEvG0Djz1wcxsnQw'
    },
    output: true
  },
  {
    id: '76',
    input: {
      s: 'quvoNwVFHe8CE3djeuhMNjZklKMpOISeKQ8bj4CwqrqhDTcaa491pJqJs5sQQq9dnZQw4s44yIbYX5kHyBpx00YxP878d6mEBjNT0woWsTyLQ8clJz4TfdoqeAvmqnUC45Yy3Gz95RbT5pFfMC7Hl6lbdyfnejwEA1GZ3iefUhjWHyF88jlZ9X3y3qmCrXQEyz5biZk7x9XeJZOG3oPSIadyb2jbxMPWTKKhHuuDRF3b2yhIIadarQlxRu9IKw3BHSFvFrczhb7BqzObahwP9637hux3BYYT18P6GW9WuBKtGYRvLrFDAZGdSWTxw4ReUGO5RuzXO5zAxNEQ9uUbJQQvB1FByrs6zktNdqswhzCyJTIqLmqdT8WkCTEhZUssYKRPVrD2r7mDWJDloQminfyUCCsYv1oZPEZoBH8I96dFAxtSWw6scB4KEY74YTTxXPjYyeBbgOjKopwj1cKRsnE8XohsUL2Mn3FwB2E1nEsTAsKe0qSzdm2hyYd8y2GW9xBuRhZTHcO6z4J5lICusINdUjBJIiVSZgJv2lqZycMxpzu0LahRCevmkzV2O9LbLZOV0qT5iG8K3hQKrLbRuIjJNGxZDIlUZCagmyRLKkH6ayH2qM1gI0CQjX7wKRCBf3btAlK8ON5pXwgYzftdiOi7Z0mFdwb2GADSV8HT1rV74UdrgIIKXqTFo22nzv1tYJkqbfHUNyq7LRL6Zuj5KUfB0b8bHMMCQhjMh1g1KJJRw7QBCv5mqKGhmPaJHK2s9mIl5XpA2pufC5ZpCISJAWViAB5sCZrTK9AnDHSRQ8YwzDkvutt071DOlaQ7yutBn3GorDnXtdasnIKmW'
    },
    output: true
  },
  {
    id: '77',
    input: {
      s: 'Ey0znq3uI0ueMXJs7q1oTvF6mml494eDMkWv1dp65F5BGvmlwdUdRApkQWHcqcoaio'
    },
    output: true
  },
  {
    id: '78',
    input: {
      s: 'w9LQLjdDFYQoBqLvNDlF9152hEWM4PxfbRIo9oMH1SmbL4GXajKUnyaOv5pQxQyvT'
    },
    output: true
  },
  {
    id: '79',
    input: {
      s: '2TxOjoe1dS36Mg'
    },
    output: true
  },
  {
    id: '80',
    input: {
      s: 'OGKkQvStdFIFFEJ4UBuNdO24on1tiISr7oAbNyIUVhB4VLpJw384USs0iMLnrD6vKveAMiP66UYFEp7aYY2GicocyQbkYr55hqZL1Eu9mahmREj98bWFZ'
    },
    output: true
  },
  {
    id: '81',
    input: {
      s: 'cBLebWHSvvQ6a7C7RZtlImQ0DWbbGLmy00MR5pWYCsEe7YNTVOZtO48w4uq6N05kx0tVPXLuovXzYeBqlR0'
    },
    output: true
  },
  {
    id: '82',
    input: {
      s: 'BdPemaCJbzor0ujI4CAkcvqVTLVefwhANse4X5FLCxgwOMcdIRbF3ta6ALm2Vlmrc9YteYfLv6p2UzFiZ8ZoWxQ3ZWMGaZOuSLcPHjAnJ9ZRvLmSvRHIAsaKG7NLkkEZGkQhLuCUmNxDdnFfHJepQl3HkmWUqHosFavnF0k1NdmyggcJCIdi0K4VhDlOBhszmrAujCT6ewS9OwZqt4FoAodFJaYYrOaRBR96xOOgEt0JhzfpNx4XvqcZ1xukHgaO4VLLxmIdw3RsH3DFWPK7jdOYdYUjeFmWazXDROBtwIAPeoK0B2zrU5OTi3PTWrUb2MnM3yp1xe8IgceQvRsN518S0lapHXVALAtOmU9M23lbMIqHMMYmVN60hr7vm711ohlqnwcJefYKiV1FV2W3bAT9tq8pTiP1rzWq8B1IiFuObS5cLadwLPsu2USmnMbqEJRYGENrg62ZpuFAVvtT1o3xAdDWrwNNI'
    },
    output: true
  },
  {
    id: '83',
    input: {
      s: 'Bvxk20C8tKITK0AIi85fKj6jkYd2JxL1cdP'
    },
    output: true
  },
  {
    id: '84',
    input: {
      s: '0fMyoXZqLZc0W2RMA1eYE6IgeLHLqObyv7KTWsnSCk9WaMi'
    },
    output: true
  },
  {
    id: '85',
    input: {
      s: 'SO6A2Ur8bBUUJJ1Z4t5AMzY9PdoX9ODpMWKeKjX'
    },
    output: true
  },
  {
    id: '86',
    input: {
      s: '0IhN9NVOdCR'
    },
    output: true
  },
  {
    id: '87',
    input: {
      s: '2ec0cdITZ5EIrK2SpH6txJlekh8mG9aod0txuAliCKdTG0oy4yJw0hpTCiaex8v'
    },
    output: true
  },
  {
    id: '88',
    input: {
      s: 'bvKdP3eWryHe49dSeH3i3dnluI4AsU'
    },
    output: true
  },
  {
    id: '89',
    input: {
      s: '8xCoHMubriGYvLKna0Ps6hQFeDUNqOz8f8onJaJevsHVtkvcETA9v4JDOgoWZm0iAahM57Q1QGlD'
    },
    output: true
  },
  {
    id: '90',
    input: {
      s: 'tgorEPaG5t38Jgn8zJ5gr09K6'
    },
    output: true
  },
  {
    id: '91',
    input: {
      s: 'PDgu61hOHSZNnFC0tkABY5AFn3UJkARcBkbLyPrwBP0jHaj3cHdxE0v'
    },
    output: true
  },
  {
    id: '92',
    input: {
      s: 'TOkVsqFuGKBx'
    },
    output: false
  },
  {
    id: '93',
    input: {
      s: 'qnBONhV2IYuGFl42vrRzCzBA4NWg3PYbINpRLUVFDpnI2uWYMEE7g5ikv4g2tkB9m217q5WUzSE6ZfhRlPZFrVjBLZI7Da1jIBgcDWUJ5VhPvyHrJFzWB1keBX4nPYqE7GzCTE5yF8K5Zrg3QHS6uAz9NtiL4WTh3aOch4OO15vNOdi76VnkNwJ20tHpJNuDrCHNHZowugzWhgvWwSf7H6mOnLawMlbd464lCFxOhSGU3dMKtssWCet2l7eIA1718CYZ7tCOxMG1U5FrdTssIyf7tZEkYc8'
    },
    output: true
  },
  {
    id: '94',
    input: {
      s: 'KRQHtMn8roT2nKDIPBD5q6pnTLiaKwEfWDJOq6nTkKVF4Lbw4GOldtvaSewBuwHrK564XF0IJY4LCwdfpL68BWazzJlDTT8m5prg339vEpPUjcb5ySBb7ha9wZuIiRjS8q6F5xdGwVpMgt1HY7uBSSHEl4HdZIcNHCufuDCpX8WG6WzTHzZAwouzAujHZ6eSo8k6HuKLnQ9erv6CisdhWBRXEZ0vpqLDt1aNdfQuFy5G2CUc1gorrjPkMfLIGvQQL3lkxsPLySlnWZPA4r9C6bAFgtNmE8oARyJzc1y4MCctx4vfUz5o2uOADOcZk9D4KNJnNt7d6Ag74DaZRMiBgrx9f8mF9ItTXWuVo55AoOFUsZaITho9lN5afUTwV1PVRZYNwePtD39onEmz'
    },
    output: true
  },
  {
    id: '95',
    input: {
      s: 'yhOQf5pA0Fsa76GGABvSRD4fMzncWjgINsedJsJI3yJ6bIkI1tRWf5kiigHoHEKF3hM4Wupfl3AAoB69MfmDGu9chPm6Uioa88p9nzpAF'
    },
    output: true
  },
  {
    id: '96',
    input: {
      s: 'hBwinxBQG2voFRuSFoGrLwhaGu4EbFD3Eq61wucVGazTEGxJJh7BCB4ugVW1ZN4ovsbokJqvvYMruWGrSmrxZJws6WtMfkO6DyMilMh4t2jyIwGC6MfEjIRpWTK2MAdpoScxesuKRESoMUiz8Sdy6SFzK2osgL1yKHj3WYQzMNGigPfdiw3YL8totNGs4cYrc6L4JjHG1dnKV41UkrhAI6TpESxilQdL8YC7Sup89pxrbNIxFPjVy3TVzWNbggo3Si2fSqPRH2obQG7vQhcEKQD1q41UkThZyY4DPDcNif4vQ4ZXUfhLUc8D6VUZo1vEowbHLZzAtdvUQ8fLhWY11CpH6qIiGibkcWLMmc7hghtZFmXD1XR3BOXQokp4zVhznFp03OXqIjhxA7IfUiQ1yWXzlUtGiA'
    },
    output: true
  },
  {
    id: '97',
    input: {
      s: 'RtpEY7D'
    },
    output: true
  },
  {
    id: '98',
    input: {
      s: 'CiQdtWortOI8Mfh2Yu5Fcu53z5ghzwUnr2GrYXcNQ17kCPO9XtBbiOXILfIa1HszpkSq0fFaT'
    },
    output: true
  },
  {
    id: '99',
    input: {
      s: 'Oo3gSIzBci5TxiN3A7Z6Fnkk7ZijxuLmioD29gLsHgSHfixUT8RVnEB9IwK8tz2sEUI8AbR3WWaknxYzZfNaikia1y2zxljZp2I0QP0UjXEeKStBIVNLItPqtWh9fDPOPkvxazOSXpRvOEtjIBKOk2oTOQmiJtPOYqix2IHKRCOwaATgmfIqN8zdZ4b'
    },
    output: true
  },
  {
    id: '100',
    input: {
      s: 'PKxkKTV4Q5ZQCJZH3bSHRjCoabEEozOluHhZufW4DB7vcwK72W2QGZqRvrqOzReSiFSgGLFJSOzjRRH6qebYT2PTyseJvSKtgsbgLBSmsc7gXyOI2IrggRZ7RNECbpWkpRhLHVPba5oJnTaOueHWWDruFWItevE2RgiJjuTFKrhS5wvPfquAhG7j'
    },
    output: true
  }
]

const generateTestCases = (numTests: number) => {
  const testCases = []
  for (let i = 0; i < numTests; i++) {
    const id = `${i + 1}`
    const s = faker.string.alphanumeric({
      length: { min: 1, max: Math.floor(Math.random() * 1000) + 1 },
      casing: 'mixed'
    }) // 'ATCIC'; // Generate random string of length random

    const output = solution(s)

    testCases.push({
      id,
      input: { s },
      output
    })
  }
  fs.writeFileSync(
    path.join(__dirname, 'starter-problem-test-cases.json'),
    JSON.stringify(testCases, null, 2)
  )
}
// generateTestCases(100)
