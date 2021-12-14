import { render } from '@testing-library/react';

import Alert100 from './alert100';

describe('Alert100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert100 />);
    expect(baseElement).toBeTruthy();
  });
});
