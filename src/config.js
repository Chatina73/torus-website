import log from 'loglevel'

import {
  APPLE,
  APPLE_LINKED_VERIFIER,
  APPLE_VERIFIER,
  DISCORD,
  DISCORD_LINKED_VERIFIER,
  DISCORD_VERIFIER,
  // EMAIL_PASSWORD,
  FACEBOOK,
  FACEBOOK_LINKED_VERIFIER,
  FACEBOOK_VERIFIER,
  GITHUB,
  GITHUB_LINKED_VERIFIER,
  GITHUB_VERIFIER,
  GOOGLE,
  GOOGLE_LINKED_VERIFIER,
  GOOGLE_VERIFIER,
  HOSTED_EMAIL_PASSWORDLESS_LINKED_VERIFIER,
  HOSTED_EMAIL_PASSWORDLESS_VERIFIER,
  JWT,
  // JWT,
  KAKAO,
  KAKAO_LINKED_VERIFIER,
  KAKAO_VERIFIER,
  LINE,
  LINE_LINKED_VERIFIER,
  LINE_VERIFIER,
  LINKEDIN,
  LINKEDIN_LINKED_VERIFIER,
  LINKEDIN_VERIFIER,
  REDDIT,
  REDDIT_LINKED_VERIFIER,
  REDDIT_VERIFIER,
  TWITCH,
  TWITCH_LINKED_VERIFIER,
  TWITCH_VERIFIER,
  TWITTER,
  TWITTER_LINKED_VERIFIER,
  TWITTER_VERIFIER,
  WECHAT,
  WECHAT_LINKED_VERIFIER,
  WECHAT_VERIFIER,
  // WEIBO,
  // WEIBO_VERIFIER,
  // WEIBO_LINKED_VERIFIER,
} from './utils/enums'

const {
  VUE_APP_BASE_ROUTE,
  VUE_APP_GOOGLE_CLIENT_ID,
  VUE_APP_APPLE_CLIENT_ID,
  VUE_APP_DISCORD_CLIENT_ID,
  VUE_APP_FACEBOOK_CLIENT_ID,
  VUE_APP_GITHUB_CLIENT_ID,
  VUE_APP_LINE_CLIENT_ID,
  VUE_APP_LINKEDIN_CLIENT_ID,
  VUE_APP_REDDIT_CLIENT_ID,
  VUE_APP_TWITCH_CLIENT_ID,
  VUE_APP_TWITTER_CLIENT_ID,
  VUE_APP_LOGIN_DOMAIN,
  VUE_APP_HOSTED_EMAIL_PASSWORDLESS_CLIENT_ID,
  VUE_APP_WECHAT_CLIENT_ID,
  VUE_APP_KAKAO_CLIENT_ID,
  VUE_APP_TKEY_ONLY,
  VUE_APP_SEED_PHRASE_KEYS_ONLY,
  VUE_APP_REQUIRE_SEED_PHRASE,
  VUE_APP_HIDE_TOPUP,
  VUE_APP_TKEY_SECURITY_QUESTIONS_MANDATORY,
  VUE_APP_INFURA_KEY,
} = process.env

log.info('baseurl', VUE_APP_BASE_ROUTE, 'is tkey', VUE_APP_TKEY_ONLY)

const baseUrl = VUE_APP_BASE_ROUTE || 'https://localhost:3000'

const baseRoute = baseUrl + process.env.BASE_URL

const redirectURI = `${baseUrl}/redirect`

const LOGIN_DOMAIN = VUE_APP_LOGIN_DOMAIN

// no reddit for binance

// In Modal, show 6 by default (view more)
export default {
  baseUrl,
  baseRoute,
  tkeyEmailHost: 'https://email.tkey.io/send_mail',
  commonApiHost: 'https://common-api.tor.us',
  metadataHost: 'https://metadata.tor.us',
  api: 'https://api.tor.us',
  // api: 'http://localhost:2020',
  infuraKey: VUE_APP_INFURA_KEY,

  onlyTkey: VUE_APP_TKEY_ONLY === 'true',
  // use this flag to force check a flag in frontend while creation of tkey
  requireSeedPhraseWhileCreation: VUE_APP_REQUIRE_SEED_PHRASE === 'true',
  // after login, only display seed phrase accounts
  onlySeedPhraseAccounts: VUE_APP_SEED_PHRASE_KEYS_ONLY === 'true',
  // use this flag to force password in frontend while creation of tkey
  mandatorySecurityQuestionsWhileCreation: VUE_APP_TKEY_SECURITY_QUESTIONS_MANDATORY === 'true',

  hideTopup: VUE_APP_HIDE_TOPUP === 'true',

  simplexApiHost: 'https://simplex-api.tor.us',
  moonpayApiHost: 'https://moonpay-api.tor.us',
  wyreApiHost: 'https://wyre-api.tor.us',
  rampApiHost: 'https://ramp-network-api.tor.us',
  xanpoolApiHost: 'https://xanpool-api.tor.us',
  mercuryoApiHost: 'https://mercuryo-api.tor.us',

  moonpayHost: 'https://buy.moonpay.io',
  moonpayApiQuoteHost: 'https://api.moonpay.io',
  moonpayLiveAPIKEY: 'pk_live_Wg90NLnFst3ms7tiqnMDDO0yjlypMzYK',
  moonpayTestHost: 'https://buy-staging.moonpay.io',
  moonpayTestAPIKEY: 'pk_test_j6AnwGJD0XTJDg3bTO37OczjFsddYpS',

  wyreHost: 'https://pay.sendwyre.com/purchase',
  wyreAccountId: 'AC_RUQMPNP7QQY',

  rampHost: 'https://widget-instant.ramp.network',
  rampApiQuoteHost: 'https://api-instant.ramp.network/api/host-api/assets',
  rampAPIKEY: 'dw9fe8drpzmdfuks79ub5hvmqzuyjbme4kwkwkqf',

  xanpoolHost: 'https://checkout.xanpool.com',
  xanpoolLiveAPIKEY: '778522fccc19a010f100f437c4aca60j',
  xanpoolTestHost: 'https://checkout.sandbox.xanpool.com',
  xanpoolTestAPIKEY: 'sandbox_778522fccc19a010f100f437c4aca60j',
  xanpoolApiQuoteHost: 'https://xanpool.com/api/transactions/estimate',

  mercuryoHost: 'https://exchange.mercuryo.io',
  mercuryoLiveAPIKEY: '8e531c49-2f64-4e7e-b1d4-16aa4958c291',
  mercuryoTestHost: 'https://sandbox-exchange.mrcr.io',
  mercuryoTestAPIKEY: '45fb9cb6-608e-44fe-a1cf-9c59de4a9e8d',

  redirect_uri: redirectURI,
  supportedCurrencies: ['USD', 'AUD', 'BTC', 'CAD', 'DAI', 'ETC', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'PHP', 'RUB', 'SGD', 'UAH'],
  additionalCurrencies: ['ANT', 'BAT', 'DASH', 'DGD', 'GNO', 'LTC', 'QTUM', 'REP', 'SAI', 'XEM', 'XLM', 'XMR', 'XRP', 'ZEC'],
  logosUrl: 'https://images.toruswallet.io',

  // key is the verifier
  loginConfig: {
    ...(GOOGLE_VERIFIER && {
      [GOOGLE_VERIFIER]: {
        typeOfLogin: GOOGLE,
        name: GOOGLE,
        description: 'dappLogin.continue',
        clientId: VUE_APP_GOOGLE_CLIENT_ID,
        linkedVerifier: GOOGLE_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        mainOption: true,
        showOnDesktop: true,
        showOnMobile: true,
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(FACEBOOK_VERIFIER && {
      [FACEBOOK_VERIFIER]: {
        description: '',
        typeOfLogin: FACEBOOK,
        name: FACEBOOK,
        clientId: VUE_APP_FACEBOOK_CLIENT_ID,
        linkedVerifier: FACEBOOK_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        mainOption: true,
        showOnDesktop: true,
        showOnMobile: true,
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(TWITTER_VERIFIER && {
      [TWITTER_VERIFIER]: {
        description: '',
        typeOfLogin: TWITTER,
        name: TWITTER,
        clientId: VUE_APP_TWITTER_CLIENT_ID,
        linkedVerifier: TWITTER_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        mainOption: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'twitter',
          isVerifierIdCaseSensitive: false,
        },
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(DISCORD_VERIFIER && {
      [DISCORD_VERIFIER]: {
        description: '',
        typeOfLogin: DISCORD,
        name: DISCORD,
        clientId: VUE_APP_DISCORD_CLIENT_ID,
        linkedVerifier: DISCORD_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        mainOption: true,
        showOnDesktop: true,
        showOnMobile: true,
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(LINE_VERIFIER && {
      [LINE_VERIFIER]: {
        description: '',
        typeOfLogin: LINE,
        name: 'LINE',
        clientId: VUE_APP_LINE_CLIENT_ID,
        linkedVerifier: LINE_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'line',
        },
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(REDDIT_VERIFIER && {
      [REDDIT_VERIFIER]: {
        description: '',
        typeOfLogin: REDDIT,
        name: REDDIT,
        clientId: VUE_APP_REDDIT_CLIENT_ID,
        linkedVerifier: REDDIT_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(APPLE_VERIFIER && {
      [APPLE_VERIFIER]: {
        description: '',
        typeOfLogin: APPLE,
        name: APPLE,
        clientId: VUE_APP_APPLE_CLIENT_ID,
        linkedVerifier: APPLE_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'apple',
        },
        // For torus only
        hasLightLogo: true,
        torusDescription: '',
      },
    }),
    ...(GITHUB_VERIFIER && {
      [GITHUB_VERIFIER]: {
        description: '',
        typeOfLogin: GITHUB,
        name: 'GitHub',
        clientId: VUE_APP_GITHUB_CLIENT_ID,
        linkedVerifier: GITHUB_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'github',
          isVerifierIdCaseSensitive: false,
        },
        // For torus only
        hasLightLogo: true,
        torusDescription: '',
      },
    }),
    ...(TWITCH_VERIFIER && {
      [TWITCH_VERIFIER]: {
        description: '',
        typeOfLogin: TWITCH,
        name: TWITCH,
        clientId: VUE_APP_TWITCH_CLIENT_ID,
        linkedVerifier: TWITCH_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(LINKEDIN_VERIFIER && {
      [LINKEDIN_VERIFIER]: {
        description: '',
        typeOfLogin: LINKEDIN,
        name: 'LinkedIn',
        clientId: VUE_APP_LINKEDIN_CLIENT_ID,
        linkedVerifier: LINKEDIN_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'linkedin',
        },
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(WECHAT_VERIFIER && {
      [WECHAT_VERIFIER]: {
        description: '',
        typeOfLogin: WECHAT,
        name: 'WeChat',
        clientId: VUE_APP_WECHAT_CLIENT_ID,
        linkedVerifier: WECHAT_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: false,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'Wechat',
        },
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(KAKAO_VERIFIER && {
      [KAKAO_VERIFIER]: {
        description: '',
        typeOfLogin: KAKAO,
        name: 'Kakao',
        clientId: VUE_APP_KAKAO_CLIENT_ID,
        linkedVerifier: KAKAO_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          connection: 'Kakao',
        },
        // For torus only
        hasLightLogo: false,
        torusDescription: '',
      },
    }),
    ...(HOSTED_EMAIL_PASSWORDLESS_VERIFIER && {
      [HOSTED_EMAIL_PASSWORDLESS_VERIFIER]: {
        description: 'dappLogin.continue',
        typeOfLogin: JWT,
        name: 'email',
        clientId: VUE_APP_HOSTED_EMAIL_PASSWORDLESS_CLIENT_ID,
        linkedVerifier: HOSTED_EMAIL_PASSWORDLESS_LINKED_VERIFIER,
        logoHover: '',
        logoLight: '',
        logoDark: '',
        showOnModal: true,
        showOnDesktop: true,
        showOnMobile: true,
        jwtParameters: {
          domain: LOGIN_DOMAIN,
          verifierIdField: 'name',
          connection: '',
          isVerifierIdCaseSensitive: false,
        },
        // For torus only
        hasLightLogo: true,
        torusDescription: 'login.signUpEmail',
      },
    }),
    // ...(WEIBO_VERIFIER && {
    //   [WEIBO_VERIFIER]: {
    //     description: '',
    //     typeOfLogin: WEIBO,
    //     clientId: VUE_APP_WEIBO_CLIENT_ID,
    //     linkedVerifier: WEIBO_LINKED_VERIFIER,
    //     logoHover: '',
    //     logoLight: '',
    //     logoDark: '',
    //     showOnModal: true,
    //     jwtParameters: {
    //       domain: LOGIN_DOMAIN,
    //       connection: 'weibo',
    //       isVerifierIdCaseSensitive: false,
    //     },
    //     // For torus only
    //     hasLightLogo: false,
    //     torusDescription: '',
    //   },
    // }),
  },
}
