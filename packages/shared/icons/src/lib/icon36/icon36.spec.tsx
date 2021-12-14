import { render } from '@testing-library/react';

import Icon36 from './icon36';

describe('Icon36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon36 />);
    expect(baseElement).toBeTruthy();
  });
});
