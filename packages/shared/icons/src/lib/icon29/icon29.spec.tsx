import { render } from '@testing-library/react';

import Icon29 from './icon29';

describe('Icon29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon29 />);
    expect(baseElement).toBeTruthy();
  });
});
