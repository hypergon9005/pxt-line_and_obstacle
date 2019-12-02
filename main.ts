basic.forever(function () {
    // comment goes here
    if (maqueen.sensor(PingUnit.Centimeters) < 15 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 75)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 150)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 150)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
                }
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
                    }
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
                    } else {
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
                    }
                }
            }
        }
    }
})
