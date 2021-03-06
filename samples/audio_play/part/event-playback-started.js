/**
 * @file 测试json文件
 * @author yelvye@baidu.com
 */

let data = {
    version: '2.0',
    session: {
        new: true,
        sessionId: 'sessionId',
        attributes: {}
    },
    context: {
        System: {
            application: {
                applicationId: 'sample_audio_play'
            }
        }
    },
    request: {
        type: 'AudioPlayer.PlaybackStarted',
        requestId: '33c78c8f-22db-4d6a-bfd5-075d264377b7',
        timestamp: '1501127440',
        token: '12329898321',
        offsetInMilliSecond: '1000'
    }
};

console.log(JSON.stringify(data));


