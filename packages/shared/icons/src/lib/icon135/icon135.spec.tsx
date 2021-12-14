import { render } from '@testing-library/react';

import Icon135 from './icon135';

describe('Icon135', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon135 />);
    expect(baseElement).toBeTruthy();
  });
});
