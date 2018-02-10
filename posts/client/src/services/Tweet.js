import Api from '@services/Api'

export default {
    fetchTweet() {
        return Api().get('tweet');
    }
}