import { render } from '@testing-library/react';

import Icon132 from './icon132';

describe('Icon132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon132 />);
    expect(baseElement).toBeTruthy();
  });
});
