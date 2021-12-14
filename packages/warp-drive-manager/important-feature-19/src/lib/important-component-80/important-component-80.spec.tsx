import { render } from '@testing-library/react';

import ImportantComponent80 from './important-component-80';

describe('ImportantComponent80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent80 />);
    expect(baseElement).toBeTruthy();
  });
});
