import { render } from '@testing-library/react';

import Alert219 from './alert219';

describe('Alert219', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert219 />);
    expect(baseElement).toBeTruthy();
  });
});
