import { render } from '@testing-library/react';

import ImportantComponent78 from './important-component-78';

describe('ImportantComponent78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent78 />);
    expect(baseElement).toBeTruthy();
  });
});
