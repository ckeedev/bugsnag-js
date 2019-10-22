import Breadcrumb from "./breadcrumb";
import * as common from "./common";
import Event from "./event";
import Session from "./session";

declare class Client {
  private constructor();

  // reporting errors
  public notify(
    error: common.NotifiableError,
    onError?: common.OnErrorCallback,
    cb?: (err: any, event: Event) => void,
  ): void;

  // breadcrumbs
  public leaveBreadcrumb(message: string, metadata?: any, type?: string, timestamp?: string): Client;

  // metadata
  public addMetadata(section: string, values: { [key: string]: any }): void;
  public addMetadata(section: string, key: string, value: any): void;
  public getMetadata(section: string, key?: string): any;
  public clearMetadata(section: string, key?: string): void;

  // context
  public getContext(): string | undefined;
  public setContext(c: string): void;

  // user
  public getUser(): { id?: string, name?: string, email?: string };
  public setUser(id: string, name?: string, email?: string): void;
  public clearUser(): void;

  // reporting sesions
  public startSession(): Client;
  public pauseSession(): void;
  public resumeSession(): boolean;

  // callbacks
  public addOnError(fn: common.OnErrorCallback): void;
  public removeOnError(fn: common.OnErrorCallback): void;

  public addOnSession(fn: common.OnSessionCallback): void;
  public removeOnSession(fn: common.OnSessionCallback): void;

  public addOnBreadcrumb(fn: common.OnBreadcrumbCallback): void;
  public removeOnBreadcrumb(fn: common.OnBreadcrumbCallback): void;

  // plugins
  public use(plugin: common.IPlugin, ...args: any[]): Client;
  public getPlugin(name: string): any;
}

export default Client;
