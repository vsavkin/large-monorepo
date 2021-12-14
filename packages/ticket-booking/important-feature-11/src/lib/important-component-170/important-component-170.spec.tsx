import { render } from '@testing-library/react';

import ImportantComponent170 from './important-component-170';

describe('ImportantComponent170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent170 />);
    expect(baseElement).toBeTruthy();
  });
});
