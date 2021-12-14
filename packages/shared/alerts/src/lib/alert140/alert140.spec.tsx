import { render } from '@testing-library/react';

import Alert140 from './alert140';

describe('Alert140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert140 />);
    expect(baseElement).toBeTruthy();
  });
});
