// Nexss PROGRAMMER 2.0 - Groovy
// Hello World template for JSON Data
// SETUP

import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def NexssStdin = System.in.newReader("utf-8").readLine()

def jsonSlurper = new JsonSlurper()
NexssStdout = jsonSlurper.parseText(NexssStdin)
NexssStdout["HelloFromGroovy"] = GroovySystem.version

println(JsonOutput.toJson(NexssStdout))
