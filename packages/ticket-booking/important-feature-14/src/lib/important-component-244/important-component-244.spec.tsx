import { render } from '@testing-library/react';

import ImportantComponent244 from './important-component-244';

describe('ImportantComponent244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent244 />);
    expect(baseElement).toBeTruthy();
  });
});
