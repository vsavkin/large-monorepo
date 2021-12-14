import { render } from '@testing-library/react';

import Icon121 from './icon121';

describe('Icon121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon121 />);
    expect(baseElement).toBeTruthy();
  });
});
