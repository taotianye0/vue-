/**
 * Created by Administrator on 2017/4/28.
 */
'user strict';

window.onload = function () {

    //初始化
    var video = $('#video1').videoCt({
        title: 'jq22 html5自定义视频控件',              //标题
        volume: 0.2,                //音量
        barrage: true,              //弹幕开关
        comment: true,              //弹幕
        reversal: true,             //镜像翻转
        playSpeed: true,            //播放速度
        update: true,               //下载
        autoplay: false,            //自动播放
        clarity: {
            type: ['360P','480P'],            //清晰度
            src: ['https://blz-videos.nosdn.127.net/1/OverWatch/OVR-S03_E03_McCree_REUNION_zhCN_1080P_mb78.mp4',
                  'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Mei_RiseAndShine.mp4']      //链接地址
        },
        commentFile: 'comment.json'           //导入弹幕json数据
    });

    //扩展
    video.title;                    //标题
    video.status;                   //状态
    video.currentTime;              //当前时长
    video.duration;                 //总时长
    video.volume;                   //音量
    video.clarityType;              //清晰度
    video.claritySrc;               //链接地址
    video.fullScreen;               //全屏
    video.reversal;                 //镜像翻转
    video.playSpeed;                //播放速度
    video.cutover;                  //切换下个视频是否自动播放
    video.commentTitle;             //弹幕标题
    video.commentId;                //弹幕id
    video.commentClass;             //弹幕类型
    video.commentSwitch;            //弹幕是否打开
    $('#video1').bind('ended', function() {
        console.log('弹幕json数据：\n'+ video.comment());              //获取弹幕json数据
    });
}