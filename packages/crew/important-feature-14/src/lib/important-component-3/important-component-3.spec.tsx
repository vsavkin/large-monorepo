import { render } from '@testing-library/react';

import ImportantComponent3 from './important-component-3';

describe('ImportantComponent3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent3 />);
    expect(baseElement).toBeTruthy();
  });
});
