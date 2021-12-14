import { render } from '@testing-library/react';

import Alert236 from './alert236';

describe('Alert236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert236 />);
    expect(baseElement).toBeTruthy();
  });
});
