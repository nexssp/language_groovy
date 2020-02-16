// Nexss PROGRAMMER 2.0 - Groovy
// Default template for JSON Data
// SETUP

import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def NexssStdin = System.in.newReader("utf-8").readLine()


def jsonSlurper = new JsonSlurper()
NexssStdout = jsonSlurper.parseText(NexssStdin)
NexssStdout["test"] ="test"

println(JsonOutput.toJson(NexssStdout))
