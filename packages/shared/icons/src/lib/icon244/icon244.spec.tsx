import { render } from '@testing-library/react';

import Icon244 from './icon244';

describe('Icon244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon244 />);
    expect(baseElement).toBeTruthy();
  });
});
