import { render } from '@testing-library/react';

import Alert204 from './alert204';

describe('Alert204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert204 />);
    expect(baseElement).toBeTruthy();
  });
});
