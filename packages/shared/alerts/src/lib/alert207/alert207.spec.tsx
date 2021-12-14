import { render } from '@testing-library/react';

import Alert207 from './alert207';

describe('Alert207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert207 />);
    expect(baseElement).toBeTruthy();
  });
});
